'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from "react-icons/io5";

function HeaderMenu() {
  const [active, setActive] = React.useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    setActive(!active);
  }

  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Blogs',
      url: '/blogs',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];

  return (
    <>
      <button 
        onClick={ toggleMenu } 
        className={`flex justify-end md:hidden
          ${active ? "after:content-['']" : "after:content-[none]"}
          after:content-[''] after:fixed after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-black after:opacity-25 after:z-10
        `}
      >
        <FiMenu className='h-full w-auto' />
      </button>

      <div
        className={`
          ${active ? 'translate-x-0' : 'translate-x-full'}
          z-20 shadow-md
          transition-transform
          justify-end right-0 fixed
          bg-background p-4
          h-screen w-full
          xs:max-w-xs
          md:h-auto md:shadow-none
          md:static md:translate-x-0
          md:justify-center md:p-0 md:max-w-none md:w-auto
        `}
      >
        <button
          onClick={() => setActive(false)}
          className='block ml-auto mb-16 h-8 md:hidden'
        >
          <IoClose className='h-full w-auto' />
        </button>
        <nav className='flex flex-col gap-2 md:flex-row md:gap-4 md:justify-center list-none'>
          {links.map((link) => (
            <li key={'header-link-' + link.url}>
              <Link
                className={`
                  p-4 cursor-pointer select-none font-medium uppercase text-sm block w-full text-start
                  relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
                  before:w-full

                  md:text-md md:p-2 md:border-none md:bg-transparent md:text-foreground 

                  ${ pathname === link.url 
                    ? `
                      font-bold text-cyan border-cyan before:bg-cyan before:h-[2px] md:text-cyan md:before:w-full
                    ` : `
                      text-foreground before:bg-foreground
                      md:before:w-0 md:before:transition-all md:before:duration-150 md:hover:before:w-full
                    `
                  } 
                `}
                href={ link.url }
              >
                { link.name }
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </>
  )
}

export default HeaderMenu