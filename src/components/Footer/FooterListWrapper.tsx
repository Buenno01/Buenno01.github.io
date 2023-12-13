import { ReactNode } from 'react';

type FooterListWrapperProps = {
  children: ReactNode
};

function FooterListWrapper({ children }: FooterListWrapperProps) {
  return (
    <ul className="px-2">
      {children}
    </ul>
  );
}

export default FooterListWrapper;
