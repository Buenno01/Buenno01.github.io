import React from 'react';
import HeaderMenu from './HeaderMenu';
import Logo from './ui/Logo';

function Header() {
  return (
    <header
      className='
        fixed top-0 w-full p-4 grid grid-cols-2 text-foreground
        shadow-md
        backdrop-blur-sm
        z-50
        md:grid-cols-3 md:px-8
      '
    >
      <div className='flex w-full justify-start'>
        <p className='flex items-center'>
          <Logo className='w-32 xs:w-36 sm:w-40 md:w-44 h-auto'></Logo>
        </p>
      </div>

      <HeaderMenu />
    </header>
  );
}

export default Header;