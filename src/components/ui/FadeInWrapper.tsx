import { motion, MotionProps, useInView } from 'motion/react';
import React, { ComponentProps, useRef } from 'react';

type FadeInWrapperProps = React.PropsWithChildren<ComponentProps<'div'> & MotionProps>;

function FadeInWrapper({ children, ...rest }: FadeInWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount: 0.15,
  });

  return (
    <motion.div
      { ...rest }
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={inView ? { opacity: 1, transform: 'translateY(0)' } : {}}
      transition={{ duration: 1 }}
    >
      { children }
    </motion.div>
  );
}

export default FadeInWrapper;