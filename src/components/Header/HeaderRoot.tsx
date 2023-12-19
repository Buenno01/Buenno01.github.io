import { ReactNode } from 'react';

type HeaderRootProps = {
  children: ReactNode,
};

function HeaderRoot({ children }:HeaderRootProps) {
  return (
    <>
      <div className="h-9" />
      <header
        className={ `flex justify-between items-center pr-2 w-full 
        fixed max-h-9 z-10 text-lg md:container md:self-center 
        bg-white dark:bg-zinc-800 dark:bg-opacity-60 bg-opacity-60 md:p-0` }
      >
        { children }

        {
        'menuIsVisible'
        && (
          null
        )
        }
      </header>
    </>
  );
}
export default HeaderRoot;
