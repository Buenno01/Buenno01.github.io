import LocomotiveScroll from "@/components/LocomotiveScroll";
import ProjectGrid from "@/pages/root/ProjectGrid";
import SummarySlide from "@/pages/root/SummarySlide";

export default function Home() {
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <section className="relative w-screen h-screen">
        <SummarySlide />
      </section>
      <ProjectGrid />
    </>
  );
}
