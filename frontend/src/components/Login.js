import React from "react";
import LoginBackground from "./LoginBackground";
import { useTypewriter } from "react-simple-typewriter";
import RevealX from "./utils/RevealX";
export default function Login() {
  const [typeEffect] = useTypewriter({
    words: ["Sign in to StoryForge."],
    typeSpeed: 120,
  });

  return (
    <div>
      <LoginBackground />
      <div className="my-20 flex justify-center px-2 flex-col">
        <div className="blur-overlay bg-[#0b0338]">
          <h1 className="text-4xl font-bold text-white text-center md:text-6xl lg:text-7xl">
            {typeEffect}
          </h1>
        </div>
      </div>
    </div>
  );
}
