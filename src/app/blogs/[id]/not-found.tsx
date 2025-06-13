import SectionWrapper from '@/components/ui/SectionWrapper';
import Link from 'next/link';

export default function NotFound() {
  return (
    <SectionWrapper className="text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, the blog post you're looking for doesn't exist.
      </p>
      <Link 
        href="/blogs" 
        className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-bold"
      >
        Back to Blog List
      </Link>
    </SectionWrapper>
  );
} 