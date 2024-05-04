import { Carousel, IconButton } from "@material-tailwind/react";
import laf from "../ChasingRed.png";
import feather from "../feather.png";
import whiteStag from "../white-stag.png";
import carouselBG from "../HeroBG.jpg";
import quotation from "../QuotationMark.png";
export default function CarouselTransition() {
  return (
    <div
      style={{
        backgroundImage: `url(${carouselBG})`,
        backgroundSize: "cover",
        position: "relative",
      }}
      className="justify-center items-center flex pt-20"
    >
      <div className="custom-shape-divider-top-1714759530">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        style={{
          minHeight: "200px",
          minWidth: "300px",
          maxHeight: "800px",
          maxWidth: "1200px",
          height: "60vh",
          width: "80vw",
        }}
        className="mb-4 xl:my-20"
      >
        <Carousel
          className="rounded-xl h-full w-full"
          autoplay={true}
          autoplayDelay={10000}
          loop={true}
          transition={{ type: "tween", duration: 2 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-2 left-2/4 z-0 flex -translate-x-2/4 gap-2 md:left-3/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 h-2 bg-[#e0474d]"
                      : "w-4 bg-[#ffffff]"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="blue"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
              disabled={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="blue"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
              disabled={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <div
            style={{
              backgroundSize: "cover",
            }}
            className="h-full w-full flex flex-col items-center justify-center md:flex-row"
          >
            <div className="h-full items-center justify-center hidden md:flex">
              <img src={laf} className="h-96 w-80" />
            </div>
            <div className="h-full w-full flex flex-col pt-10 gap-3 md:w-1/2 p-2 md:gap-5">
              <div className="justify-center flex">
                <img src={quotation} className="inline h-10 w-12" />
                <p className="text-base inline mx-2 md:text-xl lg:text-2xl font-semibold text-white font-montserrat">
                  The StoryForge Stars Program gave me opportunities I never
                  thought possible. It connected me to a world that I had only
                  imagined. I don't know how else to say it. It changed my life!
                </p>
              </div>
              <cite className="text-right text-gray-200 text-sm lg:text-xl">
                {" "}
                Isabelle Ronin (@ISABELLERONIN)
              </cite>
              <p className="pl-10 text-gray-300 text-xs ms:text-sm lg:text-base font-manrope">
                Chasing Red was one of 2016's most read stories on StoryForge.
                Newly edited and expanded, the book was split into two and hit
                bookstore shelves in 2017.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundSize: "cover",
            }}
            className="h-full w-full flex flex-row items-center justify-center"
          >
            <div className="h-full items-center justify-center hidden md:flex">
              <img src={feather} className="h-96 w-80" />
            </div>
            <div className="h-full w-full flex flex-col pt-10 gap-3 md:w-1/2 p-2 md:gap-5">
              <div className="justify-center flex">
                <img src={quotation} className="inline h-10 w-12" />
                <p className="text-base inline mx-2 md:text-xl lg:text-2xl font-semibold text-white font-montserrat ">
                  Having been active on StoryForge for several years, I knew it
                  woud be the perfect platform for a thriller with lots of
                  cliffhangers for readers to discuss. Teen horror is my
                  passion.
                </p>
              </div>
              <cite className="text-right text-gray-200 text-sm lg:text-xl">
                {" "}
                Zoe Aarsen (@ZAARSENIST)
              </cite>
              <p className="pl-10 text-gray-300 text-xs md:text-sm lg:text-base font-manrope">
                Zoe Aarsen is a graphic designer and copyrighter. Her first
                paranormal YA novel, Light as a Feather, Stiff as a Board, is
                being published by Simon & Schuster and turned into a television
                series on Hulu.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundSize: "cover",
            }}
            className="h-full w-full flex flex-row items-center justify-center"
          >
            <div className="h-full items-center justify-center hidden md:flex">
              <img src={whiteStag} className="h-96 w-80" />
            </div>
            <div className="h-full w-full flex flex-col pt-10 gap-3 md:w-1/2 p-2 md:gap-5">
              <div className="justify-center flex">
                <img src={quotation} className="inline h-10 w-12" />
                <p className="text-base inline mx-2 md:text-xl lg:text-2xl font-semibold text-white font-montserrat">
                  Working with StoryForge Studios is like a dream. Not only do
                  they care about your success, but also staying true to your
                  vision.
                </p>
              </div>
              <cite className="text-right text-gray-200 text-sm lg:text-xl">
                {" "}
                Kara Barbieri (@PANDEAN)
              </cite>
              <p className="pl-10 text-gray-300 text-xs md:text-sm lg:text-base font-manrope">
                Kara barbieri is a twenty-two year old author with a love for
                the weird and mystic. Her debut novel, WHITE STAG, will be
                published by Wednesday Books/Macmillan in January 2019.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
