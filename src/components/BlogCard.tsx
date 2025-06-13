import { Blog } from '@/@types/Blog';
import React from 'react';
import FadeInWrapper from './ui/FadeInWrapper';
import CardWrapper from './ui/CardWrapper';
import Image from 'next/image';
import { IoHeartOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import IconItem from './ui/IconItem';


function BlogCard({ blog }: { blog: Blog }) {
  return (
    <FadeInWrapper className="mb-8">
      <CardWrapper className="relative">
        <article>
          <Image src={ blog.cover_image } alt={ blog.title } width={ 1000 } height={ 420 } layout='responsive' />
          <div className='mt-3'>
            <h2>
              <a
                className='after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 max-w-full block whitespace-nowrap overflow-ellipsis overflow-hidden'
                href={ `/blogs/${ blog.id }` }
                title={ blog.title }
              >
                { blog.title }
              </a>
            </h2>
            <div className='text-xl font-light w-fit gap-2 justify-center items-center'>
              <span>
                { blog.public_reactions_count }
                <IoHeartOutline className='inline ml-1' />
              </span>
              <span className='pl-3'>
                { blog.comments_count }
                <GoComment className='inline ml-1' />
              </span>
            </div>
            <p>{ blog.description }</p>
          </div>
        </article>
      </CardWrapper>
      {
        blog.tag_list.length > 0 && (
          <ul className='mt-2 flex flex-wrap gap-1'>
            {
              blog.tag_list.map((tag, index) => (
                <IconItem key={ index + tag } backgroundColor='#fff' textColor='#121212' iconKey={ tag } name={ tag } className='capitalize lg:translate-y-0' />
              ))
            }
          </ul>
        )
      }
    </FadeInWrapper>
  )
}

export default BlogCard