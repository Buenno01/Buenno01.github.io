import LocomotiveScroll from "@/components/LocomotiveScroll";
import InfiniteSlider from "@/components/ui/InfiniteSlider";
import ProjectGrid from "@/pages/root/ProjectGrid";
import SummarySlide from "@/pages/root/SummarySlide";

export default function Home() {
  const something = [
    1,
    2,
    3,
    4,
  ]

  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <section className="relative w-screen h-screen">
        <SummarySlide />
      </section>
      <section className="relative w-screen h-screen">
        <SummarySlide />
      </section>
      <InfiniteSlider duration={5}>
        {
          something.map((number) => (
            <div key={number} className="bg-blue-500" style={{ width: '25vw'}}>{number}</div>
          ))
        }
      </InfiniteSlider>
      <ProjectGrid />
    </>
  );
}
