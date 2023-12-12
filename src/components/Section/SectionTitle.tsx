type SectionTitleProps = {
  headline: string,
};
function SectionTitle({ headline }: SectionTitleProps) {
  return (
    <h2
      className="text-5xl uppercase max-w-full break-words
      flex flex-col items-center relative text-center mb-4
      after:w-10/12 after:h-1.5 after:self-center
      after:blacknwhite-gradient after:top-12 after:absolute
      after:block sm:w-fit sm:max-w-xs
      sm:group-data-reverse:self-end
    "
    >
      {headline}
    </h2>
  );
}

export default SectionTitle;
