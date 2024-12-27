'use client';

import React, { useRef } from 'react';
import AnimatedBannerSlide from './AnimatedBannerSlide';
import { useScroll } from 'motion/react';

function AnimatedBanner() {
  const images = [
    { src: '/banner1.jpg', alt: 'Banner 1' },
    { src: '/banner2.jpg', alt: 'Banner 2' },
    { src: '/banner3.jpg', alt: 'Banner 3' },
  ];

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
    offset: [
      "0 1",
      "1 1"
    ]
  });

  return (
    <section ref={ ref } className='w-screen relative' style={{ height: `${ 100 * images.length }vh` }}>
      <ul className='w-screen sticky'>
        {images.map((image, index) => (
          <AnimatedBannerSlide
            key={'animated-banner-slide-' + image.src}
            image={image}
            index={index}
            scrollYProgress={scrollYProgress}
            isLast={index === images.length - 1}
          />
        ))}
      </ul>
    </section>
  );
}

export default AnimatedBanner;