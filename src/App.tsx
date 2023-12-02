import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import SectionContainer from './components/SectionContainer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16" />
      <Header />
      <SectionContainer id="projects" headline="Projects">
        <ProjectsList />
      </SectionContainer>
    </div>
  );
}

export default App;
