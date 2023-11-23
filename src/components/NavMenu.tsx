import { MenuLink } from '../types';
import MenuItem from './MenuItem';

function NavMenu() {
  const itens: MenuLink[] = [
    {
      title: 'Find me',
      hover: [
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/viniciusbuenoc/',
        },
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/viniciusbuenocosta/',
        },
      ],
    },
    {
      title: 'Projects',
      url: '#',
    },
    {
      title: 'Skills',
      url: '#',
    },
    {
      title: 'About me',
      url: '#',
    },
  ];
  return (
    <nav>
      <ul
        className="flex-col  text-center  absolute  left-0  right-0 top-10
    bg-background  w-full  m-0 py-3  bg-opacity-95  hidden  max-w-4xl
    z-20  border-b-2  border-cyan
    md:border-0  md:flex  md:flex-row  md:static  md:bg-opacity-100
    md:content-baseline  md:justify-between  md:mr-20  md:p-0"
      >
        {itens.map((item, index) => (
          <li key={ index }>
            {item.hover ? (
              <>
                {item.title}
                {' '}
                {item.url}
              </>
            ) : (
              <MenuItem title={ item.title } url={ item.url! } />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
