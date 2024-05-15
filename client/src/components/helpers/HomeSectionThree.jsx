import React from "react";
import originals from "../../images/Originals.jpg";
import sf from "../../images/StoryForgies.png";
import contests from "../../images/writing-contests.jpg";
import RevealX from "../utils/RevealX";
import RevealY from "../utils/RevealY";
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
      <div className="flex flex-col gap-16 pt-10 md:flex-row md:gap-20 flex-wrap justify-center">
        <RevealY>
          <div className="flex flex-col items-center">
            <div className="h-64 w-64 shadow-[34px_34px_8px_12px_#0b0338]">
              <img src={contests} className="w-full h-full" />
            </div>
            <div className="mt-20 pl-5">
              <a href="#" className="hover:text-discoverHover">
                <h1 className="text-xl font-montserrat font-semibold">
                  Writing Contests
                </h1>
              </a>
              <p className="w-80 mt-5 font-manrope">
                Enter writing contests to get published, win awards, and partner
                with global brands.
              </p>
            </div>
          </div>
        </RevealY>
        <RevealY>
          <div className="flex flex-col items-center">
            <div className="h-64 w-64 shadow-[34px_34px_8px_12px_#0b0338]">
              <img src={sf} className="w-full h-full" />
            </div>
            <div className="mt-20 pl-5">
              <a href="#" className="hover:text-discoverHover">
                <h1 className="text-xl font-montserrat font-semibold">
                  The StoryForgies
                </h1>
              </a>
              <p className="w-80 mt-5 font-manrope">
                StoryForge's annual awards program committed to celebrate the
                best stories around the world.
              </p>
            </div>
          </div>
        </RevealY>
        <RevealY>
          <div className="flex flex-col items-center">
            <div className="h-64 w-64 shadow-[34px_34px_8px_12px_#0b0338]">
              <img src={originals} className="w-full h-full" />
            </div>
            <div className="mt-20 pl-5">
              <a href="#" className="hover:text-discoverHover">
                <h1 className="text-xl font-montserrat font-semibold">
                  StoryForge Picks
                </h1>
              </a>
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
