import ProjectCard from './ProjectCard';
import * as projImages from '../assets/projectImages';

function ProjectsList() {
  return (
    <nav className="flex flex-col h-screen">
      <ProjectCard imageUrl={ projImages.CalculatorProj } />
      <ProjectCard imageUrl={ projImages.PixelProj } />
      <ProjectCard imageUrl={ projImages.ToDoProj } />
      <ProjectCard imageUrl={ projImages.WeatherProj } />
    </nav>
  );
}

export default ProjectsList;
