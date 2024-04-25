import { Carousel, IconButton } from "@material-tailwind/react";
import React from "react";
import logo from "../StoryForgeLogo.png";
import RevealNX from "./utils/RevealNX";
import { Link } from "react-router-dom";
export default function SignupForm() {
  return (
    <Carousel
      className="rounded-xl h-full w-full"
      autoplay={false}
      loop={false}
      transition={{ type: "tween", duration: 1.25 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-12 right-0 z-0 flex -translate-x-2/4 gap-2 md:top-20 lg:top-1/4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "hidden" : "w-14 h-2 text-white text-sm"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {i === 0 ? "Sign Up" : "Log In"}
            </span>
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
      <div className="flex justify-center mt-2 md:mt-10 lg:mt-20 ">
        <div className="max-w-md w-full p-6 rounded-md shadow-md">
          <form>
            <RevealNX>
              <div className="mb-4 flex justify-center">
                <Link to="/" className="text-white text-xl font-bold">
                  <img
                    src={logo}
                    className="h-12 w-12 cursor-pointer"
                    title="StoryForge | Home"
                  />
                </Link>
              </div>
            </RevealNX>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="re-enter-password"
                name="re-enter-password"
                placeholder="Re-Enter Password"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200"
              />
            </div>
            <RevealNX>
              <div className="flex flex-col items-center justify-between gap-3">
                <button
                  type="submit"
                  className="py-1 px-4 bg-[#fff] text-black rounded-md focus:outline-none hover:bg-gray-300"
                >
                  Sign Up
                </button>
              </div>
            </RevealNX>
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-2 md:mt-10 lg:mt-20 ">
        <div className="max-w-md w-full p-6 rounded-md shadow-md">
          <form>
            <div className="mb-4 flex justify-center">
              <Link to="/" className="text-white text-xl font-bold">
                <img
                  src={logo}
                  className="h-12 w-12 cursor-pointer"
                  title="StoryForge | Home"
                />
              </Link>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Email or Username"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-3">
              <button
                type="submit"
                className="py-1 px-4 bg-[#fff] text-black rounded-md focus:outline-none hover:bg-gray-300"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </Carousel>
  );
}
