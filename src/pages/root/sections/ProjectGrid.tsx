import ProjectCard from '@/components/ProjectCard';
import FadeInWrapper from '@/components/ui/FadeInWrapper';
import projects from '@/data/projects';
import React from 'react';

function ProjectGrid() {
  return (
    <FadeInWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-36">
      {
        projects.map((project, index) => (
          <ProjectCard key={ index } { ...project } />
        ))
      }
    </FadeInWrapper>
  );
}

export default ProjectGrid;