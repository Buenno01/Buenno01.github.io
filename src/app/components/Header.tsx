import React from 'react';
import Image from 'next/image';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header
      className='
        fixed top-0 w-full p-4 grid grid-cols-2 text-foreground
        shadow-md
        backdrop-blur-sm
        md:grid-cols-3 md:px-8
      '
    >
      <div className='flex w-full justify-start'>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={130}
          height={38}
          priority
        />
      </div>

      <HeaderMenu />


    </header>
  );
}

export default Header;