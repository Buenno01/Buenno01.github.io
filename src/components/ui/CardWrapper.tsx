import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

type CardWrapperProps = { children: React.ReactNode } & ComponentProps<'div'>;

function CardWrapper({ children, ...rest }: CardWrapperProps) {
  return (
    <div
      { ...rest }
      className={
        twMerge(
          rest.className,
          "p-3 sm:p-4 h-fit relative z-10 bg-background-800 border-2 border-background-700"
        )
      }
    >
      { children }
    </div>
  );
}

export default CardWrapper;