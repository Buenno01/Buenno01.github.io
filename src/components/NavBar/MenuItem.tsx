import { MenuLink } from '../../types';

function MenuItem(props: MenuLink) {
  const { title, url = '#' } = props;

  return (
    <li
      className="flex flex-col content-center align-center cursor-pointer
    mt-1 py-3 hover:text-cyan md:align-baseline
    md:justify-center md:flex-grow md:relative md:mt-0
    md:border-b md:border-background md:hover:border-cyan text-xl"
    >
      <a
        href={ url }
        target="_blank"
        rel="noreferrer"
      >
        { title }
      </a>
    </li>
  );
}

export default MenuItem;
