import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ParagraphProps = {
  children?: React.ReactNode;
} & ComponentProps<'p'>;

function Paragraph({ children, ...rest }: ParagraphProps) {
  return (
    <p
      { ...rest }
      className={ twMerge('font-light mt-1', rest.className) }
    >
      { children }
    </p>
  )
}

export default Paragraph;