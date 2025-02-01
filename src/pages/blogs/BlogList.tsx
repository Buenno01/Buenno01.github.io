'use client';

import Image from 'next/image';
import useBlogs from '@/hooks/useBlogs';
import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import CardWrapper from '@/components/ui/CardWrapper';

function BlogList() {
  const [showing, setShowing] = React.useState(4);
  const { blogs, loading, error } = useBlogs();

  console.log(blogs);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{ error }</p>;
  return (
    <SectionWrapper className='md:w-1/2'>
      {
        blogs.slice(0, showing).map((blog, index) => (
          <CardWrapper key={ index + blog.title }>
            <article>
              <Image src={ blog.cover_image } alt={ blog.title } width={ 1000 } height={ 420 } layout='responsive'></Image>
              <h3>{ blog.title }</h3>
              <p>{ blog.description }</p>
            </article>
          </CardWrapper>
        ))
      }
      {
        showing < blogs.length && (
          <button onClick={ () => setShowing(showing + 4) }>Load More</button>
        )
      }
    </SectionWrapper>
  )
}

export default BlogList