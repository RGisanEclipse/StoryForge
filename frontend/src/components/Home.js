import Navbar from "./Navbar";
import hero from "../Hero.png";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col gap-8 justify-center items-center sm:flex-row sm:items-start lg:pt-36">
        <div className="text-container w-80 lg:w-5/12">
          <h1 className="text-6xl font-bold text-center text-customBlue sm:text-left">
            Hi, we're StoryForge.
          </h1>
          <p className="text-2xl my-6 text-center sm:text-left">
            The largest storytelling community
          </p>
          <p className="text-lg text-gray-500">
            Home to 97 million people who spend over 26 billion minutes a month
            engaged in original stories, StoryForge has democratized
            storytelling for a new generation of diverse Gen Z writers and their
            fans. As of July 2023
          </p>
          <div className="flex flex-row gap-8 my-5">
            <button className="p-2 px-8 rounded-md bg-[#e0474d] font-medium text-white hover:bg-[#da334f]">
              Start Reading
            </button>
            <button className="p-2 px-8 rounded-md bg-[#e0474d] font-medium text-white hover:bg-[#da334f]">
              Start Writing
            </button>
          </div>
        </div>
        <div className="image-container w-5/12 hidden mt-20 md:block p-3">
          <img src={hero} alt="Image" className="w-auto h-100" />
        </div>
      </div>
    </div>
  );
}
