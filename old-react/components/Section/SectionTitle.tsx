type SectionTitleProps = {
  headline: string,
};
function SectionTitle({ headline }: SectionTitleProps) {
  return (
    <h2
      className="text-5xl uppercase max-w-full break-words
      flex flex-col items-center relative text-center mb-6
      sm:w-fit sm:max-w-xs sm:group-data-reverse:self-end
      lg:w-1/2 lg:max-w-none

      after:w-56 after:h-1.5 after:self-center
      after:blacknwhite-gradient after:top-12 after:absolute
      after:block"
    >
      {headline}
    </h2>
  );
}

export default SectionTitle;
