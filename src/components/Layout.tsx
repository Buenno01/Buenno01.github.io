import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { GiMoonBats, GiSundial } from 'react-icons/gi';
import { Header } from './Header';

const links = [
  {
    title: 'Início',
    internalHash: '#root',
  },
  {
    title: 'Sobre',
    internalHash: '#root',
  },
  {
    title: 'Projetos',
    internalHash: '#root',
  },
  {
    title: 'Habilidades',
    internalHash: '#root',
  },
];

function Layout() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <Header.Root>
        <Header.BurguerButton
          handleMenuVisibility={ () => { setMenuIsVisible(!menuIsVisible); } }
          NotVisibleIcon={ MdOutlineMenu }
          VisibleIcon={ IoClose }
          menuIsVisible={ menuIsVisible }
        />
        <Header.LinkList
          menuIsVisible={ menuIsVisible }
          handleMenuVisibility={ () => { setMenuIsVisible(!menuIsVisible); } }
          links={ links }
        />
        <Header.DarkModeButton DarkIcon={ <GiMoonBats /> } LightIcon={ <GiSundial /> } />
      </Header.Root>
      <Outlet />
    </>
  );
}

export default Layout;
