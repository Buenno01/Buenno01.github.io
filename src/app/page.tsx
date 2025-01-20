'use client';

import LocomotiveScroll from "../components/LocomotiveScroll";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-36">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  );
}
