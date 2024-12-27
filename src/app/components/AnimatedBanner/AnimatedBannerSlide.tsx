'use client';

import { motion, MotionValue, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

type AnimatedBannerSlideProps = {
  image: { src: string, alt: string },
  index: number,
  isLast: boolean,
  scrollYProgress: MotionValue<number>,
};

export default function AnimatedBannerSlide({ image, index, isLast, scrollYProgress }: AnimatedBannerSlideProps) {
  const [maskSize, setMaskSize] = useState(0);
  const [linearBackground, setLinearBackground] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const size = latest < 0.5 ? 80 : 200;
    setMaskSize(latest == 0 ? 0 : size);

    if (isLast && latest == 1) {
      setLinearBackground(true);
    }
  });

  return (
    <li
      key={ 'animated-banner-' + image.src }
      className={ `h-screen w-screen` }
    >
      <motion.div
        style={{ maskSize: `${maskSize}%` }}
        className={ `${ index > 0 && 'mask' } ${ linearBackground && '' } h-screen w-screen overflow-hidden fixed top-0 transition-mask duration-300` }
      >
        <Image
          className='object-cover object-center h-full w-full'
          src={ image.src }
          alt={ image.alt }
          width={ 1920 }
          height={ 1080 }
        />
        <h1 className='z-10 absolute bottom-64 text-center w-full text-2xl'> { Array.from({ length: 18}).map(() => `${index}`)} </h1>
      </motion.div>
    </li>
  );
}
