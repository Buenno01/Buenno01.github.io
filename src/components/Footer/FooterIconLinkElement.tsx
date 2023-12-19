import { FooterLinkType } from '../../@types/type';

type FooterIconLinkElementProps = {
  socialMedia: FooterLinkType,
};

function FooterIconLinkElement({ socialMedia }: FooterIconLinkElementProps) {
  return (
    <li>
      <a
        className="flex gap-2 items-center"
        target="_blank"
        href={ socialMedia.url }
        rel="noreferrer"
      >
        <span className="text-xl">
          <socialMedia.Icon />
        </span>
        {socialMedia.name}
      </a>
    </li>
  );
}

export default FooterIconLinkElement;
