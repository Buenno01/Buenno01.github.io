import AnimatedBanner from "@/components/AnimatedBanner";
import LocomotiveScroll from "@/components/LocomotiveScroll";
import ProjectGrid from "@/pages/root/ProjectGrid";
import SummarySlide from "@/pages/root/SummarySlide";

export default function Home() {
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <AnimatedBanner>
        <SummarySlide />
      </AnimatedBanner>
      <ProjectGrid />
    </>
  );
}
