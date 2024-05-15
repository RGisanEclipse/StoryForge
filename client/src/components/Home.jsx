import HomeSectionOne from "./helpers/HomeSectionOne";
import HomeSectionTwo from "./helpers/HomeSectionTwo";
import Carousel from "./helpers/HomeCarousel";
import Navbar from "./helpers/Navbar";
import HomeSectionThree from "./helpers/HomeSectionThree";
export default function Home() {
  return (
    <div>
      <div className="fixed top-0 w-screen z-10">
        <Navbar />
      </div>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <Carousel />
    </div>
  );
}
