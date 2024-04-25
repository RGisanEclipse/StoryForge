import React from "react";
import LoginBackground from "./LoginBackground";
import { useTypewriter } from "react-simple-typewriter";
import SignupForm from "./SignupForm";
import RevealY from "./utils/RevealY";
export default function Login() {
  const [typeEffect] = useTypewriter({
    words: ["Sign in to StoryForge."],
    typeSpeed: 120,
  });

  return (
    <div>
      <LoginBackground />
      <div className="my-5 flex justify-center items-center px-2 flex-col md:my-20">
        <div className="blur-overlay bg-[#000000]">
          <h1 className="text-4xl font-bold text-gray-200 text-center md:text-6xl lg:text-7xl">
            {typeEffect}
          </h1>
        </div>
        <RevealY>
          <div
            style={{
              backdropFilter: "blur(3px)", 
              borderRadius: "10px",
            }}
            className="blur-overlay my-5 w-80 lg:w-96"
          >
            <SignupForm />
          </div>
        </RevealY>
      </div>
    </div>
  );
}
