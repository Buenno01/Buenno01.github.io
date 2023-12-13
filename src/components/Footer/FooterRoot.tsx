import { ReactNode } from 'react';
import FooterHr from './FooterHr';

type FooterRootProps = {
  children: ReactNode,
};

function FooterRoot({ children }: FooterRootProps) {
  return (
    <footer className="bg-black bg-opacity-20 py-6 mt-2 flex flex-col">
      <div className="px-2 sm:container self-center">
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
