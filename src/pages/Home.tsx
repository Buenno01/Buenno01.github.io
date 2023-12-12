import { Section } from '../components/Section';
import SectionTextBox from '../components/Section/SectionTextBox';

const contents = {
  aboutMe: [
    `Oi, meu nome é Vinícius Bueno Costa, eu entrei na Universidade 
    Federal de Itajubá em 2018, no curso de Engenharia Mecânica, mas 
    durante esse período descobri que o que eu queria, de fato, era me 
    tornar um programador.`,

    `Dessa forma, interrompi meus estudos na UNIFEI e decidi estudar o 
    que eu pudesse sobre programação, iniciei de forma autodidata, com 
    o apoio de materiais técnicos e seguindo alguns cursos.`,

    `Após um ano nesse modelo, percebi que era necessário fazer uma 
    pausa no meu trabalho, que no momento era de garçom, para focar em 
    me desenvolver profissionalmente. Desde então, tenho estudado 
    programação full-stack na Trybe.`,
  ],

};

function Home() {
  return (
    <>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        <SectionTextBox paragraphs={ contents.aboutMe } />
      </Section.Root>

      <Section.Root reverse id="projects" customClass="h-screen">
        <Section.Title headline="projects" />
        <SectionTextBox paragraphs={ contents.aboutMe } />
      </Section.Root>
    </>
  );
}

export default Home;
