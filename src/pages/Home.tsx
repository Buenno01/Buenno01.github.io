import { Section } from '../components/Section';

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
    programação full-stack na <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>.`,
  ],

};

function Home() {
  return (
    <main>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        {
        contents.aboutMe.map((paragraph, index) => (
          <Section.Paragraph key={ index }>
            {paragraph}
          </Section.Paragraph>
        ))
        }
      </Section.Root>
      <Section.Root id="projects">
        <Section.Title headline="projects" />
      </Section.Root>
    </main>
  );
}

export default Home;
