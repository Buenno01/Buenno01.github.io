import SectionParagraph from './SectionParagraph';

type SectionTextBoxProps = {
  paragraphs: string[],
};

function SectionTextBox({ paragraphs }: SectionTextBoxProps) {
  return (
    <div
      className="flex flex-col gap-2 leading-5 sm:w-1/2 mr-0
      ml-auto sm:group-data-reverse:ml-0 sm:group-data-reverse:mr-auto"
    >
      {
        paragraphs.map((paragraph, i) => (
          <SectionParagraph key={ i }>{paragraph}</SectionParagraph>
        ))
        }
    </div>
  );
}

export default SectionTextBox;
