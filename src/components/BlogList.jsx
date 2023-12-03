import React from "react";
import BlogPost from "./BlogPost";
import LinearRegressionPreview from "./LinearRegressionPreview";

const BlogList = ({ posts, onClick, onLinearRegressionClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <LinearRegressionPreview onClick={onLinearRegressionClick} />
    {posts.map((post) => (
      <BlogPost key={post.id} post={post} onClick={onClick} />
    ))}
  </div>
);

export default BlogList;
