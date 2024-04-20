import blob from "../Blob.png";
export default function HomeSectionTwo() {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center gap-5 px-5 mb-6">
        <h1 className="text-5xl font-medium text-center md:text-left">
          How StoryForge Works
        </h1>
        <p className="text-xl text-center lg:text-left">
          Get your story discovered through the power of community and
          technology on StoryForge.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row py-5 px-5 items-center gap-4 xl:justify-center xl:items-start">
        <div className="flex flex-row xl:flex-col gap-5">
          <div className="flex flex-row gap-10 w-80 transition duration-200 ease-in-out transform hover:scale-105 lg:w-96">
            <div className="text-8xl font-extrabold">1</div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold">Create</h2>
              <p className="w-56 h-32">
                Share your original story on StoryForge. Find the writing
                resources you need to craft a story only you can tell.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex justify-center relative">
            <img src={blob} className="w-80 relative" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <p className="text-white text-2xl font-bold w-24 text-center">
                50+ Writing Resources
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row xl:flex-col gap-5">
          <div className="flex flex-row gap-10 w-80 transition duration-200 ease-in-out transform hover:scale-105 lg:w-96">
            <div className="text-8xl font-extrabold">2</div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold">Build</h2>
              <p className="w-56 h-32">
                Establish a global fan base as your story gains readership and
                momentum. Connect with other like-minded writers through
                storytelling.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex justify-center relative">
            <img src={blob} className="w-80 relative" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <p className="text-white text-2xl font-bold w-24 text-center">
                90 Million+ People
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row xl:flex-col gap-5">
          <div className="flex flex-row gap-10 w-80 transition duration-200 ease-in-out transform hover:scale-105 lg:w-96">
            <div className="text-8xl font-extrabold">3</div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold">Amplify</h2>
              <p className="w-56 h-32">
                Gain Wattpad Star status and get your story published or adapted
                into film or television with Wattpad WEBTOON Studios!
              </p>
            </div>
          </div>
          <div className="hidden sm:flex justify-center relative">
            <img src={blob} className="w-80 relative" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <p className="text-white text-2xl font-bold w-24 text-center">
                1000+ Story Deals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
