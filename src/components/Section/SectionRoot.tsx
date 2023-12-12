import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionRootProps = {
  children: ReactNode,
  id: string,
  customClass?: string,
  reverse?: boolean,
};

function SectionRoot({ children, id,
  customClass = '', reverse = false }: SectionRootProps) {
  return (
    <section
      className={ twMerge('sm:self-center sm:flex sm:flex-col group px-4', customClass) }
      id={ id }
      data-reverse={ reverse }
    >
      { children }
      <hr className="border-black dark:border-white opacity-20 mt-4" />
    </section>
  );
}

export default SectionRoot;
