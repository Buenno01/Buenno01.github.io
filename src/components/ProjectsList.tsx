import ProjectCard from './ProjectCard';
import * as projImages from '../assets/projectImages';

function ProjectsList() {
  return (
    <section className="container self-center">
      <nav className="flex flex-col h-96 h-screen">
        <ProjectCard imageUrl={ projImages.CalculatorProj } />
        <ProjectCard imageUrl={ projImages.PixelProj } />
        <ProjectCard imageUrl={ projImages.ToDoProj } />
        <ProjectCard imageUrl={ projImages.WeatherProj } />
      </nav>
    </section>
  );
}

export default ProjectsList;
