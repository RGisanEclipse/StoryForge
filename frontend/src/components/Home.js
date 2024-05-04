import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";
import Carousel from "./HomeCarousel";
import Navbar from "./Navbar";
import HomeSectionThree from "./HomeSectionThree";
export default function Home() {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <Carousel/>
    </div>
  );
}
