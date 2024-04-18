import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";
import Carousel from "./HomeCarousel";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <Carousel/>
    </div>
  );
}
