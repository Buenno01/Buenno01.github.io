import BurguerMenu from "./BurguerMenu";

function NavBrand() {
  return (
    <>
      <div className="flex justify-between content-center w-full px-3 md:flex-col md:w-auto md:align-center md:justify-center md:pb-1">
        <BurguerMenu />
        <span className="flex md:hidden w-10 h-10 overflow-hidden rounded-full justify-center self-center border border-cyan">
          <img className="my-img w-24 h-16 relative right-2 bottom-1" src="/src/assets/minha-foto.jpg" alt="Minha foto" />
        </span>
        <h1 className="text-cyan text-2xl font-bold">Vbc.</h1>
      </div>
    </>
  );
}

export default NavBrand;
