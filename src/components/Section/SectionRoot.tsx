import React, { ReactNode } from 'react';

type SectionRootProps = {
  children: ReactNode,
};

function SectionRoot({ children }: SectionRootProps) {
  return (
    <section>
      { children }
    </section>
  );
}

export default SectionRoot;
