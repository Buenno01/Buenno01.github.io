import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { GiMoonBats, GiSundial } from 'react-icons/gi';
import { Header } from './Header';
import { Footer } from './Footer';
import { socialMedia } from '../util/mock';

const links = [
  {
    title: 'Início',
    internalHash: '#root',
  },
  {
    title: 'Sobre',
    internalHash: '#about-me',
  },
  {
    title: 'Projetos',
    internalHash: '#projects',
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
      <main
        className="px-1 flex flex-col sm:items-center gap-6 relative
      sm:container self-center max-w-full"
      >
        <Outlet />
      </main>
      <Footer.Root>
        <Footer.Column>
          <Footer.Title headline="Me encontre nas redes" />
          <Footer.ListWrapper>
            {
              socialMedia.map((link, i) => (
                <Footer.IconLinkElement
                  key={ i }
                  socialMedia={ link }
                />
              ))
            }
          </Footer.ListWrapper>
        </Footer.Column>
      </Footer.Root>
    </>
  );
}

export default Layout;
