import React from "react";

const SoftmaxRegressionPreview = ({ post, onClick }) => (
  <div className="border border-gray-300 p-4 cursor-pointer" onClick={onClick}>
    <img
      src={post.thumbnail}
      alt={post.title}
      className="w-full h-40 object-cover mb-2"
    />
    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
    <p className="text-gray-700">{post.excerpt}</p>
  </div>
);

export default SoftmaxRegressionPreview;
