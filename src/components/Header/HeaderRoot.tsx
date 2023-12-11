import { ReactNode } from 'react';

type HeaderRootProps = {
  children: ReactNode,
};

function HeaderRoot({ children }:HeaderRootProps) {
  return (
    <>
      <div className="h-9" />
      <header
        className={ `flex justify-between items-center pr-2 w-full fixed max-h-9
      text-lg` }
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
