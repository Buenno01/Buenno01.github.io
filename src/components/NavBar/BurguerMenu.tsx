function BurguerMenu() {
  function showMenu(event: any) {
    if (event.target.id === 'burguer-menu') {
      console.log(event.target);
    } else {
      console.log(event.target.parentNode);
    }
    // event.target.classList.toggle('selected');
    // const menu = document.querySelector('header nav');
    // menu.classList.toggle('flex');
    // menu.classList.toggle('hidden');
    // document.querySelector('header p').nextElementSibling.classList.add('hidden');
  }

  const style: object = { height: '3px', width: '30px' };

  return (
    <button
      type="button"
      aria-label="Show menu"
      id="burguer-menu"
      onClick={ showMenu }
      onTouchEnd={ showMenu }
      onMouseEnter={ showMenu }
    >
      <figure
        className="flex flex-col justify-items-center gap-2 p-0 md:hidden cursor-pointer"
      >
        <span className="bg-cyan rounded" style={ style } />
        <span className="bg-cyan rounded" style={ style } />
        <span className="bg-cyan rounded" style={ style } />
      </figure>

    </button>
  );
}

export default BurguerMenu;
