import { ReactNode } from 'react';

type SectionParagraphProps = {
  children: ReactNode
};

function SectionParagraph({ children }: SectionParagraphProps) {
  return (
    <p>
      {children}
    </p>
  );
}

export default SectionParagraph;
