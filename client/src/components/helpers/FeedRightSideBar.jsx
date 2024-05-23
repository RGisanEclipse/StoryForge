import React from "react";
import DialogWithImage from "./DialogWithImage";

export default function FeedRightSideBar() {
  return (
    <div
      className="flex flex-col w-4xl text-white px-4 gap-5 h-full"
      style={{ borderLeft: "0.5px solid #3b3b3b" }}
    >
      <h1 className="text-xl font-manrope">You might also like:</h1>
      <div className="overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <DialogWithImage
          image={
            "https://cdn.cdnparenting.com/articles/2022/04/30170320/Monkey-and-the-crocodile-story.webp"
          }
        />
      </div>
    </div>
  );
}
