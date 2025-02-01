import AnimatedBanner from "@/components/AnimatedBanner";
import LocomotiveScroll from "@/components/LocomotiveScroll";
import ProjectGrid from "@/pages/root/ProjectGrid";

export default function Home() {
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <AnimatedBanner />
      <ProjectGrid />
    </>
  );
}
