import { ReactNode } from 'react';
import FooterHr from './FooterHr';

type FooterRootProps = {
  children: ReactNode,
};

function FooterRoot({ children }: FooterRootProps) {
  return (
    <footer className="bg-black bg-opacity-20 py-6 mt-2 flex flex-col gap-1">
      <div
        className="px-2 sm:container self-center
      flex flex-col gap-2 sm:flex-row sm:gap-6"
      >
        {children}
      </div>
      <FooterHr />
      <p className="text-sm font-light opacity-80 text-center">
        Desenvolvido por Vinícius Bueno Costa
      </p>
    </footer>
  );
}

export default FooterRoot;
