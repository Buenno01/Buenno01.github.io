type SectionTitleProps = {
  headline: string,
};

function SectionTitle({ headline }: SectionTitleProps) {
  return (
    <h2 className="text-5xl uppercase max-w-full break-words">
      {headline}
    </h2>
  );
}

export default SectionTitle;
