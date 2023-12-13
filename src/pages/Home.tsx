import { Section } from '../components/Section';
import { contents, projects, hardSkills, tools } from '../util/mock';

function Home() {
  return (
    <>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        <Section.TextBox paragraphs={ contents.aboutMe } />
      </Section.Root>

      <Section.Root reverse id="projects">
        <Section.Title headline="projetos" />
        <Section.ProjectTileBox projects={ projects } />
      </Section.Root>

      <Section.Root id="skills">
        <Section.Title headline="habilidades" />
        <Section.SkillsGrid
          skills={ hardSkills }
          headline="Hard-Skills"
        />
        <Section.SkillsGrid
          skills={ tools }
          headline="Ferramentas"
        />
      </Section.Root>
    </>
  );
}

export default Home;
