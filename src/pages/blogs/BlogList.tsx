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
  let totalPages = 1;
  let currentPage = 1;

  try {
    const { page } = (await searchParams) || { page: '1', q: '' };
    currentPage = Number(page);
    blogs = await blogService.get(page);
    totalPages = (await blogService.getTotalPages());
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
      {
        totalPages > 1 && (
          <nav>
            <ul className='flex justify-center flex-wrap'>
              {
                Array.from({ length: totalPages }, (_, index) => (
                  <li key={ index } className={ `space-x-1 w-fit ${ index + 1 === currentPage ? 'font-semibold text-cyan underline' : '' }` }>
                    <a href={ `/blogs?page=${ index + 1 }` } className='p-2'>
                      { index + 1 }
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        )
      }
    </SectionWrapper>
  )
}

export default BlogList