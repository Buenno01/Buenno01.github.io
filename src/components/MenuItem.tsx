import { smoothScroll } from '../util/smoothScroll';

function MenuItem() {
  return (
    <li
      className="flex flex-col content-center align-center cursor-pointer
    mt-1 py-3 hover:text-cyan md:align-baseline
    md:justify-center md:flex-grow md:relative md:mt-0
    md:border-b md:border-background md:hover:border-cyan text-xl"
    >
      <a
        onClick={smoothScroll}
        onTouchStart={smoothScroll}
        href="{some prop}"
      >
        mock up
      </a>
    </li>
  );
}

export default MenuItem;
