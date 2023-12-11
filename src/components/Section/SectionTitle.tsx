type SectionTitleProps = {
  headline: string,
};

function SectionTitle({ headline }: SectionTitleProps) {
  return (
    <h2>
      {headline}
    </h2>
  );
}

export default SectionTitle;
