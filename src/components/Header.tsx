import React from 'react';
import HeaderMenu from './HeaderMenu';
import Logo from './ui/Logo';

function Header() {
  return (
    <header
      className='header active:bg-gradient-to-b from-background-900/50 to-transparent'
    >
      <div className='flex w-full justify-start'>
        <p className='flex items-center mt-0'>
          <Logo className='w-32 xs:w-36 sm:w-40 md:w-44 h-auto'></Logo>
        </p>
      </div>

      <HeaderMenu />
    </header>
  );
}

export default Header;