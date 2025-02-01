import ProjectCard from '@/components/ProjectCard';
import FadeInWrapper from '@/components/ui/FadeInWrapper';
import SectionWrapper from '@/components/ui/SectionWrapper';
import projects from '@/data/projects';
import React from 'react';

function ProjectGrid() {
  return (
    <FadeInWrapper className='container-lg'>
      <SectionWrapper>
        <h2 className='section-title-container'>
          Projects
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            projects.slice(0, 4).map((project, index) => (
              <li key={ 'project-' + index }>
                <ProjectCard  { ...project } />
              </li>
            ))
          }
        </ul>
      </SectionWrapper>
    </FadeInWrapper>
  );
}

export default ProjectGrid;