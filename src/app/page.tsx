'use client';

import LocomotiveScroll from "@/components/LocomotiveScroll";
import ArticleCard from "@/components/ArticleCard";
import FadeInWrapper from "@/components/ui/FadeInWrapper";
import projects from "@/data/projects";

export default function Home() {
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <FadeInWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-36">
        {
          projects.map((project, index) => (
            <ArticleCard key={ index } { ...project } />
          ))
        }
      </FadeInWrapper>
    </>
  );
}
