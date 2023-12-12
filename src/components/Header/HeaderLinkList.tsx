import HeaderMenuLink from './HeaderMenuLink';

type LinkType = {
  title:string,
  internalHash: string,
};

type HeaderLinkListProps = {
  links: LinkType[],
  handleMenuVisibility: () => void,
  menuIsVisible: boolean,
};

function HeaderLinkList({ links, handleMenuVisibility,
  menuIsVisible }:HeaderLinkListProps) {
  return (
    <menu
      className={ `${menuIsVisible ? 'flex' : 'hidden'} md:flex fixed
      top-9 w-screen h-screen flex-col` }
    >
      <nav
        className="flex flex-col gap-2 bg-zinc-200 dark:bg-zinc-900 w-full h-fit
        pt-3 text-start px-3"
      >
        {
          links.map((link) => (
            <HeaderMenuLink key={ link.title } { ...link } />
          ))
        }
      </nav>
      <button
        className="h-full w-full bg-zinc-900 bg-opacity-30 dark:bg-opacity-60"
        aria-label="hide menu"
        onClick={ handleMenuVisibility }
      />
    </menu>
  );
}

export default HeaderLinkList;
