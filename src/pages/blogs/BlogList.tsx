import Image from 'next/image';
import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import CardWrapper from '@/components/ui/CardWrapper';
import { Blog } from '@/@types/Blog';
import * as data from '@/data/blogs';
// import blogService from '@/services/blogs';

async function BlogList() {
  let blogs: Blog[] = [];

  try {
    // blogs = await blogService.get();
    blogs = data.default
  } catch (error) {
    if (error instanceof Error) {
      return <p>{ error.message }</p>;
    }
    return <p>An error occurred while fetching the blogs.</p>;
  }
  return (
    <SectionWrapper className='md:w-1/2'>
      {
        blogs.map((blog, index) => (
          <CardWrapper key={ index + blog.title }>
            <article>
              <Image src={ blog.cover_image } alt={ blog.title } width={ 1000 } height={ 420 } layout='responsive'></Image>
              <h3>{ blog.title }</h3>
              <p>{ blog.description }</p>
            </article>
          </CardWrapper>
        ))
      }
    </SectionWrapper>
  )
}

export default BlogList