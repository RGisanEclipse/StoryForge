import React from "react";
import LoginBackground from "./LoginBackground";
import { useTypewriter } from "react-simple-typewriter";
import SignupForm from "./SignupForm";
import RevealY from "./utils/RevealY";

export default function Login() {
  const [typeEffect] = useTypewriter({
    words: ["Sign in to StoryForge."],
    typeSpeed: 80,
  });

  return (
    <div>
      <LoginBackground />
      <div className="mt-10 flex justify-center items-center px-2 flex-col md:mt-20">
        <div className="blur-overlay bg-[#000000]">
          <h1 className="font-montserrat text-4xl font-bold text-gray-200 text-center md:text-6xl lg:text-7xl">
            {typeEffect}
          </h1>
        </div>
        <RevealY>
          <div className="relative overflow-hidden rounded-lg w-80 lg:w-96">
            <div className="absolute inset-0 backdrop-blur-sm my-2"></div>
            <SignupForm />
          </div>
        </RevealY>
      </div>
    </div>
  );
}
