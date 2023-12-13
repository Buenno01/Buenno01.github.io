import { ReactNode } from 'react';

type FooterColumnProps = {
  children: ReactNode
};

function FooterColumn({ children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  );
}

export default FooterColumn;
