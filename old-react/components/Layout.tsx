import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { BsLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs';
import { Header } from './Header';
import { Footer } from './Footer';
import data from '../services/data';

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
    internalHash: '#skills',
  },
];

function Layout() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [actualData] = useState(data.PT);

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
        <Header.DarkModeButton
          DarkIcon={ <BsLightbulbOffFill /> }
          LightIcon={ <BsLightbulbFill /> }
        />
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
              actualData.socialMedia.map((socialMedia) => (
                <Footer.IconLinkElement
                  key={ socialMedia.name }
                  socialMedia={ socialMedia }
                />
              ))
            }
          </Footer.ListWrapper>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title headline="Cursos realizados" />
          <Footer.ListWrapper>
            {
              actualData.certifications.map((certification) => (
                <Footer.IconLinkElement
                  key={ certification.name }
                  socialMedia={ certification }
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
