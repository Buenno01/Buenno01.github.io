import React from 'react';
import Image from 'next/image';
import StackItem from './ui/StackItem';
import { Project } from '@/@types/Project';
import CardWrapper from './ui/CardWrapper';
import HoverParallax from './ui/HoverParallax';

type ArticleCardProps = Project;

function ArticleCard({ title, description, stacks, image }: ArticleCardProps) {
  return (
    <div className='group'>
      <HoverParallax>
        <CardWrapper>
          <Image className='w-full h-auto aspect-video object-cover' src={ image } alt='asdthvw' width={ 500 } height={ 500 } ></Image>
          <div className='text-xs pt-2 sm:text-sm lg:text-md text-foreground'>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-foreground'>
              { title }
            </h3>
            <p className='font-light mt-1'>
              { description }
            </p>
          </div>
        </CardWrapper>
      </HoverParallax>
      {
        stacks.length > 0 && (
        <ul className='max-w-full flex-wrap overflow-hidden py-1 gap-x-1 w-full flex justify-center'>
          {
            stacks.map((stack, index) => (
              <StackItem 
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

export default ArticleCard