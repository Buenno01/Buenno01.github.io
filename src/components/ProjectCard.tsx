import React from 'react';
import Image from 'next/image';
import IconItem from './ui/IconItem';
import { Project } from '@/@types/Project';
import CardWrapper from './ui/CardWrapper';
import HoverParallax from './ui/HoverParallax';

type ProjectCardProps = Project;

function ProjectCard({ title, description, stacks, image, links }: ProjectCardProps) {
  return (
    <div className='group h-full flex flex-col'>
      {
        links.length > 0 && (
        <nav>
          <ul className='max-w-full flex-wrap overflow-hidden py-1 gap-x-1 w-full flex justify-center'>
            {
              links.map((link, index) => (
                <IconItem 
                  key={ index }
                  className='lg:translate-y-[125%] group-hover:translate-y-0 md:text-md'
                  { ...link }
                />
              ))
            }
          </ul>
        </nav>
        )
      }
      <HoverParallax className='flex-grow-2'>
        <CardWrapper className='h-full flex flex-col'>
          <Image className='w-full h-auto aspect-video object-cover loading-bg' src={ image }  alt={ title } width={ 320 } height={ 180 } />
          <article className='text-xs pt-2 sm:text-sm lg:text-md text-foreground'>
            <h3>
              { title }
            </h3>
            <p>
              { description }
            </p>
          </article>
        </CardWrapper>
      </HoverParallax>
      {
        stacks.length > 0 && (
        <ul className='max-w-full flex-wrap overflow-hidden py-1 gap-x-1 w-full flex justify-center'>
          {
            stacks.slice(0, 3).map((stack, index) => (
              <IconItem 
                key={ index }
                { ...stack }
              />
            ))
          }
        </ul>
        )
      }
    </div>
  )
}

export default ProjectCard