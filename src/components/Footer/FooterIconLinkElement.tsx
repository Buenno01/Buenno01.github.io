import { SocialMediaType } from '../../@types/type';

type FooterIconLinkElementProps = {
  socialMedia: SocialMediaType,
};

function FooterIconLinkElement({ socialMedia }: FooterIconLinkElementProps) {
  return (
    <li>
      <a
        className="flex gap-2 items-center"
        target="_blank"
        href={ socialMedia.link }
        rel="noreferrer"
      >
        <span className="text-xl">
          <socialMedia.icon />
        </span>
        {socialMedia.name}
      </a>
    </li>
  );
}

export default FooterIconLinkElement;
