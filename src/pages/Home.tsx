import { Section } from '../components/Section';
import { contents, projects } from '../util/mock';

function Home() {
  return (
    <>
      <Section.Root id="about-me">
        <Section.Title headline="Sobre mim" />
        <Section.TextBox paragraphs={ contents.aboutMe } />
      </Section.Root>

      <Section.Root reverse id="projects" customClass="h-screen">
        <Section.Title headline="projects" />
        <Section.TextBox paragraphs={ contents.aboutMe } />
      </Section.Root>
    </>
  );
}

export default Home;
