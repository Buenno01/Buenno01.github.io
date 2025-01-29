"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React from "react";
import Image from "next/image";

function Index() {
  const images = [
    { src: "/banner1.jpg", alt: "This is one of my projects" },
    { src: "/banner2.jpg", alt: "Here is another one" },
  ];

  const ref = React.useRef<HTMLElement>(null);

  const [currentImage, setCurrentImage] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
    offset: ["start start", "1 1"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const imageChangeThreshold = 1 / images.length;

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
      style={{ height: `${100 * images.length}vh` }}
    >
      <div className="w-screen sticky h-screen top-0">
        {
          images.map((image, index) => (
            <motion.div
              style={{ maskSize: `${index <= currentImage ? 400 : 0}%` }}
              key={"animated-banner-slide-" + image.src}
              className="w-screen h-screen absolute top-0 left-0 mask transition-mask duration-1000"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 top-0 left-0 right-0 text-center text-2xl flex flex-col justify-center items-center">
                <h2>{image.alt}</h2>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
}

export default Index;
