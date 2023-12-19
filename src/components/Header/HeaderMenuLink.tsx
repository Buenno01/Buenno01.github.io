import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface HeaderMenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string,
  internalHash: string,
}

function HeaderMenuLink({ title, internalHash }:HeaderMenuLinkProps) {
  if (!internalHash.includes('#')) {
    internalHash = `#${internalHash}`;
  }
  return (
    <Link
      className="border-b
      border-black dark:border-white
      border-opacity-10 dark:border-opacity-25
      md:border-opacity-0 md:dark:border-opacity-0"
      to={ `/${internalHash}` }
      aria-label={ `navigate to ${title} section on this page` }
    >
      {title}
    </Link>
  );
}

export default HeaderMenuLink;
