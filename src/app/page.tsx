import LocomotiveScroll from "@/components/LocomotiveScroll";
import ProjectGrid from "@/pages/root/ProjectGrid";
import SummarySlide from "@/pages/root/SummarySlide";
import Ticker from "@/components/ui/Ticker";
import about from "@/data/about";
import Icon from "@/components/ui/Icon";

export default function Home() {
  const stacks = about.stacks.map((stack) =>  stack.items).reduce((acc, cur) => acc.concat(cur), []);
  return (
    <>    
      <LocomotiveScroll></LocomotiveScroll>
      <section className="relative w-screen h-screen">
        <SummarySlide />
      </section>
      <Ticker className="bg-cyan py-4" duration={15}>
        {
          stacks.map((item, index) => (
              <Icon className="text-5xl mx-6" key={item.iconKey + index } iconKey={item.iconKey} />
            ))
        }
      </Ticker>
      <ProjectGrid />
    </>
  );
}
