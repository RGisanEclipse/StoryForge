import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import RevealY from "../utils/RevealY";
export default function Saved() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("https://storyforge.onrender.com/stories");
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
      className="h-full w-full pt-5 overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex justify-center text-white text-2xl font-montserrat">
        Saved
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
