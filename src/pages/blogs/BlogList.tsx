import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Blog } from '@/@types/Blog';
import BlogCard from '@/components/BlogCard';
import { BlogSearchParams } from '@/app/blogs/page';
import blogService from '@/services/blogs';

type BlogListProps = {
  searchParams?: BlogSearchParams;
}

async function BlogList({ searchParams }: BlogListProps) {
  let blogs: Blog[] = [];

  try {
    const { page } = (await searchParams) || { page: '1', q: '' };
    blogs = await blogService.get(page);
  } catch (error) {
    if (error instanceof Error) {
      return <p>{ error.message }</p>;
    }
    return <p>An error occurred while fetching the blogs.</p>;
  }
  return (
    <SectionWrapper className='md:max-w-3xl'>
      <h1 className='section-title-container'>
        Blog List
      </h1>
      <ul>
        {
          blogs.map((blog, index) => (
            <li key={ index + blog.title }>
              <BlogCard blog={ blog } />
            </li>
          ))
        }
      </ul>
    </SectionWrapper>
  )
}

export default BlogList