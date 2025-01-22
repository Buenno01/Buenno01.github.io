'use client';

import { motion, MotionProps, useMotionValue, useTransform } from 'motion/react';
import React, { ComponentProps, useRef } from 'react';

type DivProps = MotionProps & ComponentProps<'div'>;

type HoverParallaxProps = {
  children: React.ReactNode;
} & DivProps;

function HoverParallax({ children, ...rest }: HoverParallaxProps) {
    const relativeX = useMotionValue(0);
    const relativeY = useMotionValue(0);
    const rotateX = useTransform(relativeY, [-1, 1], [10, -10]); // Reversed values
    const rotateY = useTransform(relativeX, [-1, 1], [-10, 10]); // Reversed values

    const rotateLight = useTransform(relativeY, [-1, 1], [30, 70]); // Reversed values

    const ref = useRef<HTMLDivElement>(null);
  
    const updateRelativePosition = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width;
      const offsetY = (event.clientY - rect.top) / rect.height;
      const normalizedX = offsetX * 2 - 1;
      const normalizedY = offsetY * 2 - 1;

      relativeX.set(normalizedX);
      relativeY.set(normalizedY);
    };
  
    const resetRelativePosition = () => {
      relativeX.set(0);
      relativeY.set(0);
    };
  
    return (
      <motion.div
        { ...rest }
        ref={ ref }
        style={{
          transformStyle: "preserve-3d",
          perspective: 800,
          rotateX,
          rotateY,
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseMove={ updateRelativePosition }
        onMouseLeave={ resetRelativePosition }
        transition={{ velocity: 0 }}
      >
        { children }
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '150%',
            height: '150%',
            opacity: 0.1,
            background: `linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 70%)`,
            rotate: rotateLight,
            translateX: '-50%',
            translateY: '-50%',
            pointerEvents: 'none', // Reflexo não interfere nos eventos do mouse
            zIndex: 10, // Certifique-se de que o reflexo esteja acima do conteúdo
          }}
        />
      </motion.div>
    );
}

export default HoverParallax;