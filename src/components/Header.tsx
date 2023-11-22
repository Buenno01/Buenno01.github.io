import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function Header() {
  return (
    <header
      className="flex flex-row content-between flex-nowrap
    bg-background shadow-md text-foreground  border-0 py-2
    md:px-3 md:py-0"
    >
      <LeftMenu />
      <RightMenu />
    </header>
  );
}

export default Header;
