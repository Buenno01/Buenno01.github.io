import { Section } from '../components/Section';
import { data } from '../util/mock';

const { aboutMe, projects, skills } = data;

function Home() {
  return (
    <>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        <Section.TextBox paragraphs={ aboutMe } />
      </Section.Root>

      <Section.Root reverse id="projects">
        <Section.Title headline="projetos" />
        <Section.ProjectTileBox projects={ projects } />
      </Section.Root>

      <Section.Root id="skills">
        <Section.Title headline="habilidades" />
        {
          skills.map((skillType) => (
            <Section.SkillsGrid
              key={ skillType.headline }
              skills={ skillType.content }
              headline={ skillType.headline }
            />
          ))
        }
      </Section.Root>
    </>
  );
}

export default Home;
