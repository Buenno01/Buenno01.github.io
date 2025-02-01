import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionWrapperProps = ComponentProps<'section'>;

function SectionWrapper({ children, ...rest }: SectionWrapperProps) {
  return (
    <section { ...rest } className={ twMerge(rest.className, 'container-lg my-28') }>
      { children }
    </section>
  )
}

export default SectionWrapper;