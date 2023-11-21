import MenuItem from "./MenuItem";

function NavMenu() {
  return (
    <nav className="flex-col  text-center  absolute  left-0  right-0 top-10  bg-background  w-full  m-0 py-3  bg-opacity-95  hidden  max-w-4xl  z-20  border-b-2  border-cyan  md:border-0  md:flex  md:flex-row  md:static  md:bg-opacity-100  md:content-baseline  md:justify-between  md:mr-20  md:p-0">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </nav>
  );
}

export default NavMenu;
