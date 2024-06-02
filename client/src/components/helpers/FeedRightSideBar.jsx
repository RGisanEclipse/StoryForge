import React, { useState, useEffect } from "react";
import DialogWithImage from "./DialogWithImage";
import axios from "axios";

export default function FeedRightSideBar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://storyforge.onrender.com/stories");
        setPosts(response.data.reverse());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div
      className="flex flex-col w-4xl text-white px-4 gap-5 h-full"
      style={{ borderLeft: "0.5px solid #3b3b3b" }}
    >
      <h1 className="text-xl font-manrope">You might also like:</h1>
      <div className="overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {posts.map((post, index) => (
          <DialogWithImage key={index} image={post.fileName} />
        ))}
      </div>
    </div>
  );
}
