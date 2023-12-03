import React from "react";

const Modal = ({ post, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="bg-white p-4 rounded-md overflow-auto w-full h-full">
      <button
        className="fixed bg-red-500 text-white p-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
      <img src={post.thumbnail} alt={post.title} className="w-full h-auto" />
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  </div>
);

export default Modal;
