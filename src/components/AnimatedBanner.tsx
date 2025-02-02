"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React from "react";

function AnimatedBanner({ children }: { children?: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);

  const ref = React.useRef<HTMLElement>(null);

  const [currentImage, setCurrentImage] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
    offset: ["start start", "1 1"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const imageChangeThreshold = 1 / childrenArray.length;

    if (latest >= imageChangeThreshold * (currentImage + 1)) {
      setCurrentImage((prev) => prev + 1);
    } else if (latest < imageChangeThreshold * currentImage) {
      setCurrentImage((prev) => prev - 1);
    }
  });

  return (
    <section
      ref={ref}
      className="relative w-screen"
      style={{ height: `${100 * childrenArray.length}vh` }}
    >
      <div className="w-screen sticky h-screen top-0">
        {
          childrenArray.map((children, index) => (
            <motion.div
              style={{ maskSize: `${index <= currentImage ? 400 : 0}%` }}
              key={"animated-banner-slide-" + index}
              className="w-screen h-screen absolute top-0 left-0 mask transition-mask duration-1000"
            >
              { children }
            </motion.div>
          ))
        }
      </div>
    </section>
  );
}

export default AnimatedBanner;
