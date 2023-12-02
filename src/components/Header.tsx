import LeftMenu from './NavBar/LeftMenu';
import RightMenu from './NavBar/RightMenu';

function Header() {
  return (
    <header
      className="bg-background shadow-md text-foreground
      border-0 fixed h-16 w-full flex justify-center"
    >
      <div className="container self-center">
        <LeftMenu />
        <RightMenu />
      </div>
    </header>
  );
}

export default Header;
