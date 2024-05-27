import React from "react";
import RevealY from "../utils/RevealY";
import DisplayPost from "./DisplayPost";
export default function Explore() {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];

  return (
    <div
      className="h-full w-full p-5 overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex justify-center text-white text-2xl font-montserrat">
        Explore
      </div>

      <RevealY>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images.map((src, index) => (
            <div key={index}>
              <DisplayPost image={src} />
            </div>
          ))}
        </div>
      </RevealY>
    </div>
  );
}
