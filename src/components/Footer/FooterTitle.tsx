type FooterTitleProps = {
  headline: string,
};

function FooterTitle({ headline }: FooterTitleProps) {
  return (
    <h3 className="text-xl">
      {headline}
    </h3>
  );
}

export default FooterTitle;
