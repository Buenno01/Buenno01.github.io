import ProjectCard from '@/components/ProjectCard';
import FadeInWrapper from '@/components/ui/FadeInWrapper';
import projects from '@/data/projects';
import React from 'react';

function ProjectGrid() {
  return (
    <FadeInWrapper>
      <h2 className='section-title-container container-lg'>
        Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container-lg">
        {
          projects.slice(0, 4).map((project, index) => (
            <li key={ 'project-' + index }>
              <ProjectCard  { ...project } />
            </li>
          ))
        }
      </ul>
    </FadeInWrapper>
  );
}

export default ProjectGrid;