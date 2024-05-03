import hero from "../Hero.png";
import bg from "../HeroBG.jpg";
import RevealNX from "./utils/RevealNX";
import RevealY from "./utils/RevealY";
import RevealX from "./utils/RevealX";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
export default function HomeSectionOne() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="flex flex-col"
    >
      <div className="py-16 flex flex-col gap-8 justify-center items-center sm:flex-row sm:items-start lg:pt-36">
        <div className="text-container w-80 lg:w-5/12">
          <RevealNX>
            <div className="py-2">
              <h1 className="text-5xl xl:text-6xl font-medium text-center text-white sm:text-left font-montserrat">
                Hi, we're StoryForge.
              </h1>
            </div>
          </RevealNX>
          <RevealX>
            <p className="text-2xl my-8 text-center text-white sm:text-left font-manrope">
              The largest storytelling community
            </p>
            <p className="text-lg text-white font-manrope">
              Home to 97 million people who spend over 26 billion minutes a
              month engaged in original stories, StoryForge has democratized
              storytelling for a new generation of diverse Gen Z writers and
              their fans. As of July 2023
            </p>
            <div className="flex flex-row gap-8 my-5">
              <button className="p-2 px-8 rounded-md bg-[#e0474d] font-medium text-white hover:bg-[#da334f]">
                Start Reading
              </button>
              <button className="p-2 px-8 rounded-md bg-[#e0474d] font-medium text-white hover:bg-[#da334f]">
                Start Writing
              </button>
            </div>
          </RevealX>
        </div>
        <div className="image-container w-5/12 hidden mt-20 md:block p-3">
          <RevealY>
            <img src={hero} alt="Image" className="w-auto h-100" />
          </RevealY>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 pb-12">
        <RevealX>
          <h1 className="text-white font-montserrat font-semibold text-3xl">
            See your story...
          </h1>
        </RevealX>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-24">
          <RevealNX>
            <div className="flex flex-col items-center justify-center gap-3 xl:w-56">
              <LiveTvIcon className="text-white" style={{ fontSize: "50px" }} />
              <div className="text-white text-center">Get produced to movie or film</div>
            </div>
          </RevealNX>
          <RevealNX>
            <div className="flex flex-col items-center justify-center gap-3 xl:w-56">
              <LocalMoviesIcon
                className="text-white"
                style={{ fontSize: "50px" }}
              />
              <div className="text-white text-center">Get adapted to a TV series</div>
            </div>
          </RevealNX>
          <RevealNX>
            <div className="flex flex-col items-center justify-center gap-3 xl:w-56">
              <LibraryBooksIcon
                className="text-white"
                style={{ fontSize: "50px" }}
              />
              <div className="text-white text-center">Get published</div>
            </div>
          </RevealNX>
        </div>
      </div>
    </div>
  );
}
