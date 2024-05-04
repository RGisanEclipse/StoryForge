import React from "react";
import originals from "../Originals.PNG";
import contests from "../writing-contests.jpg";
import RevealX from "./utils/RevealX";
import RevealY from "./utils/RevealY";
export default function HomeSectionThree() {
  return (
    <div className="flex flex-col items-center md:py-10">
      <RevealX>
        <div>
          <h1 className="font-montserrat font-medium text-3xl ">
            Get Discovered
          </h1>
        </div>
      </RevealX>
      <div className="flex flex-col gap-16 pt-20 md:flex-row md:gap-20 flex-wrap items-center justify-center">
        <RevealY>
          <div>
            <div className="h-64 w-64 shadow-[34px_34px_8px_12px_#0b0338]">
              <img src={contests} className="w-full h-full" />
            </div>
            <div className="mt-20 pl-5">
              <h1 className="text-xl font-montserrat font-semibold">
                Writing Contests
              </h1>
              <p className="w-80 mt-5 font-manrope">
                Enter writing contests to get published, win awards, and partner
                with global brands.
              </p>
            </div>
          </div>
        </RevealY>
        <RevealY>
          <div>
            <div className="h-64 w-64 shadow-[34px_34px_8px_12px_#0b0338]">
              <img src={originals} className="w-full h-full" />
            </div>
            <div className="mt-20 pl-5">
              <h1 className="text-xl font-montserrat font-semibold">
                StoryForge Picks
              </h1>
              <p className="w-80 mt-5 font-manrope">
                Get featured on our hand-picked reading list.
              </p>
            </div>
          </div>
        </RevealY>
      </div>
    </div>
  );
}