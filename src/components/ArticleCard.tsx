import React from 'react';
import Image from 'next/image';

function ArticleCard() {
  const { title, content, stacks, image } = {
    title: 'Facilisi ultricies',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ac nunc ultricies ultricies. Nulla facilisi. Nullam ut est nec fel',
    stacks: ['React', 'Next.js', 'TailwindCSS'],
    image: '/banner1.jpg',
  }
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
              { content }
            </p>
          </div>
        </details>
      </div>
      {
        stacks.length > 0 && (
        <ul className='overflow-hidden gap-1 w-full flex translate-y-[-100%] group-hover:translate-y-0 transition-transform justify-center'>
          {
            stacks.map((stack, index) => (
              <li
                key={ index }
                className='group/stack inline-flex overflow-hidden text-xs bg-blue-900 text-foreground font-bold px-4 py-1 rounded-b-lg'
              >
                <Image className='group-hover/stack:mr-1' src="vercel.svg" width={10} height={10} alt='Icone'></Image>
                <span
                className='w-0 group-hover/stack:w-auto overflow-hidden'>
                  { stack }
                </span>
              </li>
            ))
          }
        </ul>
        )
      }
    </div>
  )
}

export default ArticleCard