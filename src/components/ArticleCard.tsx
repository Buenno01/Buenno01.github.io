import React from 'react';
import Image from 'next/image';
import StackItem from './ui/StackItem';
import { Project } from '@/@types/Project';

type ArticleCardProps = Project;

function ArticleCard({ title, description, stacks, image }: ArticleCardProps) {
  return (
    <div className='group'>
      <div className='p-4 h-fit bg-background-500 rounded-lg relative z-10'>
        <Image className='w-full h-auto aspect-square object-cover' src={ image } alt='asdthvw' width={ 500 } height={ 500 } ></Image>
        <details>
          <summary className='marker:content-none py-3 flex justify-between items-center'>
            <h3 className='text-2xl font-bold text-foreground'>
              { title }
            </h3>
          </summary>
          <div>
            <p>
              { description }
            </p>
          </div>
        </details>
      </div>
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