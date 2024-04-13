import Navbar from "./Navbar";
import hero from "../Hero.jpg";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col items-center gap-8 sm:flex-row justify-center ">
        <div className="text-container mr-4 w-80 lg:w-3/12">
          <h1 className="text-5xl font-bold text-center lg:text-5xl lg:text-left">
            Hi, we're StoryForge.
          </h1>
          <p className="text-2xl my-6 text-center lg:text-left">
            The largest storytelling community
          </p>
          <p className="text-lg text-gray-500">
            Home to 97 million people who spend over 26 billion minutes a month
            engaged in original stories, StoryForge has democratized
            storytelling for a new generation of diverse Gen Z writers and their
            fans. As of July 2023
          </p>
          <div className="flex flex-row gap-8 items-center justify-center my-5">
            <button className="p-2 px-8 rounded-md bg-[#e0474d] font-medium text-white hover:bg-[#da334f]">
              Start Reading
            </button>
            <button className="p-2 px-8 rounded-md bg-[#e0474d] font-medium text-white hover:bg-[#da334f]">
              Start Writing
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src={hero} alt="Image" className="w-64 h-64 lg:w-80 lg:h-80" />
        </div>
      </div>
    </div>
  );
}
