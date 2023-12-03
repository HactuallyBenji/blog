import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts, onClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {posts.map((post) => (
      <BlogPost key={post.id} post={post} onClick={onClick} />
    ))}
  </div>
);

export default BlogList;
