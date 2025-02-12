import BlogList from '@/pages/blogs/BlogList';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Portfolio Vinícius | Blog',
  description: 'Here you can find all blogs I\'ve written at dev.to.',
};

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