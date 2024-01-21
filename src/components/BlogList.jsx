import React from "react";
import Preview from "./Preview.jsx";
import posts from "../data.js";

const BlogList = ({ onPostClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {posts.map((post) => (
        <Preview post={post} onClick={() => onPostClick(post.id)} />
      ))}
    </div>
  );
};

export default BlogList;
