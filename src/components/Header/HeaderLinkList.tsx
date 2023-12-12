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
      className={ `
      ${menuIsVisible ? 'flex' : 'hidden'} md:flex
      fixed md:static top-9 md:top-0
      w-screen h-screen md:w-full md:h-auto flex-col` }
    >
      <nav
        className="flex flex-col md:flex-row gap-2 md:gap-6
        bg-zinc-200 dark:bg-zinc-900
        md:bg-transparent md:dark:bg-transparent
        w-full h-fit pt-3 px-3
        text-start"
      >
        {
          links.map((link) => (
            <HeaderMenuLink key={ link.title } { ...link } />
          ))
        }
      </nav>
      <button
        className="h-full w-full bg-zinc-900 bg-opacity-30 dark:bg-opacity-60 md:hidden"
        aria-label="hide menu"
        onClick={ handleMenuVisibility }
      />
    </menu>
  );
}

export default HeaderLinkList;
