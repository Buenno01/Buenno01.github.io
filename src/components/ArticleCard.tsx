import React from 'react';
import Image from 'next/image';
import StackItem from './ui/StackItem';
import { Project } from '@/@types/Project';
import CardWrapper from './ui/CardWrapper';

type ArticleCardProps = Project;

function ArticleCard({ title, description, stacks, image }: ArticleCardProps) {
  return (
    <div className='group'>
      <CardWrapper>
        <Image className='w-full h-auto aspect-square object-cover' src={ image } alt='asdthvw' width={ 500 } height={ 500 } ></Image>
        <div className='text-xs sm:text-sm lg:text-md text-foreground'>
          <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-foreground'>
            { title }
          </h3>
          <p className='font-light'>
            { description }
          </p>
        </div>
      </CardWrapper>
      {
        stacks.length > 0 && (
        <ul className='max-w-full flex-wrap overflow-hidden gap-x-1 w-full flex translate-y-[-100%] group-hover:translate-y-0 transition-transform justify-center'>
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