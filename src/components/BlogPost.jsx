import React from 'react';

const BlogPost = ({ post, onClick }) => (
  <div className="border-b border-gray-300 p-4 cursor-pointer" onClick={() => onClick(post)}>
    <h2 className="text-2xl font-bold">{post.title}</h2>
    <p className="text-gray-700">{post.excerpt}</p>
  </div>
);

export default BlogPost;