'use client';

import React, { ComponentProps } from 'react';
import { AnimationPlaybackControls, motion, MotionProps, useAnimate, useInView } from 'framer-motion';

type TickerProps = {
  children: React.JSX.Element[];
  duration?: number;
} & MotionProps & ComponentProps<'div'>;

const Ticker: React.FunctionComponent<TickerProps> = ({
  children,
  duration = 10,
  ...rest
}: TickerProps) => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [tickerContentWidth, setTickerContentWidth] = React.useState<number | null>(0);
  const [numDupes, setNumDupes] = React.useState<number>(1);
  const [animationControls, setAnimationControls] = React.useState<AnimationPlaybackControls | undefined>(undefined);
  const [trackRef, animate] = useAnimate();
  const isInView = useInView(trackRef)

  function setupAnimation() {
    if (!trackRef.current || !tickerContentWidth || animationControls) return;

    const controls = animate(
      trackRef.current,
      { x: tickerContentWidth ? tickerContentWidth * - 1 : 0 },
      { ease: 'linear', duration, repeat: Infinity }
    );

    setAnimationControls(controls);
  }

  function toggleOnViewAnimation() {
    if (isInView) {
      animationControls?.play();
    } else {
      animationControls?.pause();
    }
  }

  function calculateNumDupes() {
    if (!tickerRef.current || !tickerContentWidth) return;

    const dupes = Math.ceil(((2 * tickerRef.current.clientWidth) -1) / tickerContentWidth);

    setNumDupes(dupes);

    return dupes;
  }

  function calculateContentWidth() {
    if (!tickerRef.current) return;
    const contentWidth = Array.from(tickerRef.current.querySelectorAll('[data-original-child]')).reduce((acc, child) => {
      return acc + child.clientWidth;
    }, 0);
    
    setTickerContentWidth(contentWidth);
  }

  React.useEffect(() => {
    setupAnimation();
    toggleOnViewAnimation();
  }, [isInView]);

  React.useEffect(() => {
    calculateContentWidth();
    calculateNumDupes();
  }, [tickerRef.current, trackRef.current]);

  return (
    <motion.div
      { ...rest }
      ref={tickerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <motion.div
        ref={trackRef}
        onHoverStart={() => { animationControls?.pause() }}
        onHoverEnd={() => { animationControls?.play() }}
        onTouchStart={() => { animationControls?.pause() }}
        onTouchEnd={() => { animationControls?.play() }}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
        style={{ display: 'flex' }}
      >
        {children.map((item, index) => (
          <div key={`ticker-slide_${index}`} data-original-child>
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map(() =>
          children.map((item, index) => <div key={index}>{item}</div>)
        )}
      </motion.div>
    </motion.div>
  );
};

export default Ticker;