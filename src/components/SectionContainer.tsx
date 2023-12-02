import { ReactNode } from 'react';

type SectionContainerProps = {
  headline: string,
  children: ReactNode,
  id: string,
};

function SectionContainer({ children, headline, id }: SectionContainerProps) {
  return (
    <section className="container self-center flex flex-col" id={ id }>
      <h2 className="text-6xl text-center text-cyan mb-5 font-semibold">
        { headline }
      </h2>
      {children}
    </section>
  );
}

export default SectionContainer;
