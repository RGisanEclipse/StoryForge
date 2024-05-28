import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import RevealY from "../utils/RevealY";

export default function FeedHome() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080/stories");
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div
      className="h-full w-full overflow-y-auto md:py-3 border-white"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="max-w-md mx-auto px-4">
        <div className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden bg-opacity-10">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full text-sm text-white pr-2 bg-transparent outline-none"
            type="text"
            id="search"
            placeholder="Search"
            style={{ border: "none", outline: "none" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-2">
        <RevealY>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </RevealY>
      </div>
    </div>
  );
}
