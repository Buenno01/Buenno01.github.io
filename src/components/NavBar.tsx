import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { smoothScroll } from '../util/smoothScroll';

const links = [
  {
    title: 'Início',
    hash: '#root',
  },
  {
    title: 'Sobre',
    hash: '#root',
  },
  {
    title: 'Projetos',
    hash: '#root',
  },
  {
    title: 'Habilidades',
    hash: '#root',
  },
];

function NavBar() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e);
    setMenuIsVisible(!menuIsVisible);
  };
  return (
    <header
      className={ `flex w-full fixed
    bg-gradient-to-b from-white dark:from-zinc-800
    text-lg ${menuIsVisible ? 'text-gray-200' : 'text-gray-300'}` }
    >
      <button
        onClick={ () => { setMenuIsVisible(!menuIsVisible); } }
        aria-label="show menu"
        className="text-4xl"
      >
        <MdOutlineMenu />
      </button>
      {
        menuIsVisible
          && (
            <button
              className="flex fixed top-9
          w-screen h-screen flex-col transition-all duration-75"
            >
              <nav
                className="flex flex-col gap-2 bg-zinc-900 w-full h-fit
             py-3 text-start px-3"
              >
                {
                  links.map((link) => (
                    <a
                      key={ link.title }
                      href={ link.hash }
                      onClick={ (e) => { handleLink(e); } }
                    >
                      {link.title}
                    </a>
                  ))
                }
              </nav>
              <button
                className="h-full w-full bg-zinc-900 bg-opacity-60"
                aria-label="hide menu"
                onClick={ () => { setMenuIsVisible(!menuIsVisible); } }
              />
            </button>
          )
      }
    </header>
  );
}
export default NavBar;
