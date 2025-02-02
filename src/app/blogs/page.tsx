import BlogList from '@/pages/blogs/BlogList';
import React from 'react';

type BlogParams = {
  page?: string;
}

export type BlogSearchParams = Promise<BlogParams>;

type BlogPageProps = {
  searchParams?: BlogSearchParams;
}

function page(props: BlogPageProps) {
  return (
    <>
      <BlogList searchParams={ props.searchParams} />
    </>
  )
}

export default page;