import { ReactNode } from 'react';

type SectionRootProps = {
  children: ReactNode,
  id: string,
};

function SectionRoot({ children, id }: SectionRootProps) {
  return (
    <section className="h-screen" id={ id }>
      { children }
    </section>
  );
}

export default SectionRoot;
