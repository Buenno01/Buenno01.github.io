import LocomotiveScroll from "@/components/LocomotiveScroll";
import ProjectGrid from "@/pages/root/ProjectGrid";
import SummarySlide from "@/pages/root/SummarySlide";
import StacksTicker from "@/pages/root/StacksTicker";

export default function Home() {
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <section className="relative w-screen h-screen">
        <SummarySlide />
      </section>
      <StacksTicker />
      <ProjectGrid />
    </>
  );
}
