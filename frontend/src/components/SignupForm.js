import { Carousel, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import logo from "../StoryForgeLogo.png";
import RevealNX from "./utils/RevealNX";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import openedEyeImage from "../Open-Eye.png";
import closedEyeImage from "../Closed-Eye.png";

export default function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleReEnterPasswordVisibility = () => {
    setReEnterPasswordVisible((prevState) => !prevState);
  };

  const toggleLoginPasswordVisibility = () => {
    setLoginPasswordVisible((prevState) => !prevState);
  };

  return (
    <Carousel
      className="rounded-xl h-full w-full"
      autoplay={false}
      loop={false}
      transition={{ type: "tween", duration: 1.25 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-12 right-0 z-0 flex -translate-x-2/4 gap-2 md:top-20 lg:top-28">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "hidden"
                  : "w-16 h-5 text-white text-sm font-orbitron"
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
              <div className="mb-4 flex md:justify-center">
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
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200 placeholder:font-orbitron font-russoOne"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200 placeholder:font-orbitron font-russoOne"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200 placeholder:font-orbitron font-russoOne"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={passwordVisible ? openedEyeImage : closedEyeImage}
                  alt={passwordVisible ? "Hide password" : "Show password"}
                  className="h-5 w-5 text-gray-400"
                />
              </button>
            </div>
            <div className="mb-4 relative">
              <input
                type={reEnterPasswordVisible ? "text" : "password"}
                id="re-enter-password"
                name="re-enter-password"
                placeholder="Re-Enter Password"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200 placeholder:font-orbitron font-russoOne"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                onClick={toggleReEnterPasswordVisibility}
              >
                <img
                  src={reEnterPasswordVisible ? openedEyeImage : closedEyeImage}
                  alt={
                    reEnterPasswordVisible ? "Hide password" : "Show password"
                  }
                  className="h-5 w-5 text-gray-400"
                />
              </button>
            </div>
            <RevealNX>
              <div className="flex flex-col items-center justify-between gap-3">
                <button
                  type="submit"
                  className="py-1 px-4 bg-[#fff] text-black rounded-md focus:outline-none hover:bg-gray-300 font-orbitron mt-3"
                >
                  Sign Up
                </button>
              </div>
              <div className="pt-5 flex flex-col gap-3 items-center">
                <div className="text-gray-300 font-orbitron">
                  Or Sign up with
                </div>
                <div className="flex flex-row justify-between gap-10">
                  <div>
                    <GoogleIcon
                      className="text-gray-500 cursor-pointer"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                  <div>
                    <FacebookIcon
                      className="text-gray-500 cursor-pointer"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                  <div>
                    <TwitterIcon
                      className="text-gray-500 cursor-pointer"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </RevealNX>
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-2 md:mt-10 lg:mt-20 ">
        <div className="max-w-md w-full p-6 rounded-md shadow-md">
          <form>
            <div className="mb-4 flex md:justify-center">
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
                id="nameLogin"
                name="nameLogin"
                placeholder="Email or Username"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200 placeholder:font-orbitron font-russoOne"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={loginPasswordVisible ? "text" : "password"}
                id="passwordLogin"
                name="passwordLogin"
                placeholder="Password"
                className="mt-1 p-2 w-full border-b border-opacity-10 bg-transparent focus:outline-none text-gray-200 placeholder:font-orbitron font-russoOne"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                onClick={toggleLoginPasswordVisibility}
              >
                <img
                  src={loginPasswordVisible ? openedEyeImage : closedEyeImage}
                  alt={loginPasswordVisible ? "Hide password" : "Show password"}
                  className="h-5 w-5 text-gray-400"
                />
              </button>
            </div>
            <div className="flex items-center justify-center text-gray-200 font-orbitron mt-5">
              Forgot Password?
            </div>
            <div className="flex flex-col items-center justify-between gap-3">
              <button
                type="submit"
                className="py-1 px-4 bg-[#fff] text-black rounded-md focus:outline-none hover:bg-gray-300 font-orbitron mt-5"
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
