import { useState } from 'react';
import { Section } from '../components/Section';
import data from '../services/data';

function Home() {
  const [actualData] = useState(data.PT);
  return (
    <>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        <Section.TextBox paragraphs={ actualData.aboutMe } />
      </Section.Root>

      <Section.Root reverse id="projects">
        <Section.Title headline="projetos" />
        <Section.ProjectTileBox projects={ actualData.projects } />
      </Section.Root>

      <Section.Root id="skills">
        <Section.Title headline="habilidades" />
          <Section.SkillsGrid
            skills={ actualData.techStacks}
            headline='Tech Stack'
          />
          <Section.SkillsGrid
            skills={ actualData.otherStacks}
            headline='Outras Ferramentas'
          />
      </Section.Root>
    </>
  );
}

export default Home;
