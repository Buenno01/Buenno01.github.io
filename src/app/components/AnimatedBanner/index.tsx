'use client';

import React from 'react';
import AnimatedBannerSlide from './AnimatedBannerSlide';

function AnimatedBanner() {
  const images = [
    { src: '/banner1.jpg', alt: 'Banner 1' },
    { src: '/banner2.jpg', alt: 'Banner 2' },
    { src: '/banner3.jpg', alt: 'Banner 3' },
  ];

  return (
    <section className='w-screen'>
      <ul className='w-screen'>
        {images.map((image, index) => (
          <AnimatedBannerSlide key={'animated-banner-slide-' + image.src}
            image={image}
            index={index}
            isLast={index === images.length - 1}
          />
        ))}
      </ul>
    </section>
  );
}

export default AnimatedBanner;