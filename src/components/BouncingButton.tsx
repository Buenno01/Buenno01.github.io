"use client";

import { motion, TargetAndTransition } from "motion/react";
import React from "react";

interface BouncingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  timeout?: number;
  y?: number[];
  x?: number[];
}

function BouncingButton({
  onClick,
  timeout,
  children,
  x,
  y,
  ...rest
}: BouncingButtonProps) {
  const [isBouncing, setIsBouncing] = React.useState(false);

  const bounceParams: TargetAndTransition = {};
  if (x) {
    bounceParams.x = x;
  }

  if (y) {
    bounceParams.y = y;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && typeof onClick === "function") {
      onClick(e);
    }
    handleBounce();
  };

  const handleBounce = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, timeout || 500);
  };
  return (
    <button {...rest} onClick={(e) => handleClick(e)}>
      <motion.span
        onClick={handleBounce}
        animate={isBouncing ? bounceParams : {}}
      >
        {children}
      </motion.span>
    </button>
  );
}

export default BouncingButton;
