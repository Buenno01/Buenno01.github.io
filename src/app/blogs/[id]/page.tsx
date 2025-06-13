import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import blogService from '@/services/blogs';
import { BlogById } from '@/@types/Blog';
import Image from 'next/image';
import { IoHeartOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import SectionWrapper from '@/components/ui/SectionWrapper';
import IconItem from '@/components/ui/IconItem';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

type BlogPageProps = {
  params: { id: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = params;
  
  try {
    const blog: BlogById = await blogService.getById(parseInt(id));
    
    return {
      title: `${blog.title} | Portfolio Vinícius`,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: [blog.cover_image],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Not Found | Portfolio Vinícius',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = params;
  
  let blog: BlogById;
  
  try {
    blog = await blogService.getById(parseInt(id));
    console.log(blog);
  } catch (error) {
    // If blog is not found, show 404 page
    notFound();
  }

  return (
    <SectionWrapper className="max-w-4xl">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <header>          
          <div className="w-full mb-8 rounded-lg overflow-hidden">
            <Image 
              src={blog.cover_image} 
              alt={blog.title}
              className="w-full h-auto"
              width={900}
              height={400}
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span>
              Published: {new Date(blog.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <IoHeartOutline />
              {blog.public_reactions_count}
            </span>
            <span className="flex items-center gap-1">
              <GoComment />
              {blog.comments_count}
            </span>
          </div>

          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <IconItem 
                  key={index + tag} 
                  backgroundColor='#fff' 
                  textColor='#121212' 
                  iconKey={tag} 
                  name={tag} 
                  className='capitalize lg:translate-y-0'
                />
              ))}
            </div>
          )}
        </header>

        <hr className='my-8' />

        <main className="text-md leading-relaxed mb-8 max-w-full article">
          <Markdown rehypePlugins={[rehypeHighlight]}>{blog.body_markdown}</Markdown>
        </main>

        <footer className='mt-8'>
          <div className="border-t pt-6">
            <p className="text-center">
              <a 
                href={blog.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-bold"
              >
                Read This Article on Dev.to
              </a>
            </p>
          </div>
        </footer>
      </article>
    </SectionWrapper>
  );
}