import NavBrand from './NavBrand';
import NavMenu from './NavMenu';

function LeftMenu() {
  return (
    <div className="flex flex-row w-full relative">
      <NavBrand />
      <NavMenu />
    </div>
  );
}

export default LeftMenu;
