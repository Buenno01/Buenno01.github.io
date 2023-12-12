import { Section } from '../components/Section';
import { contents, projects } from '../util/mock';

function Home() {
  return (
    <>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        <Section.TextBox paragraphs={ contents.aboutMe } />
      </Section.Root>

      <Section.Root reverse id="projects">
        <Section.Title headline="projects" />
        <Section.ProjectTileBox projects={ projects } />
      </Section.Root>
    </>
  );
}

export default Home;
