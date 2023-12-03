import React from "react";

const Modal = ({ post, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="bg-white overflow-auto w-full h-full text-center">
      <button
        className="bg-red-500 text-white p-2 rounded absolute top-4 right-4"
        onClick={onClose}
      >
        Close
      </button>
      {/* Centered & smaller image */}
      <img
        src={post.thumbnail}
        alt={post.title}
        onClick={onClose}
        className="inline-block w-1/2 sm:w-1/3 md:w-1/4 h-auto mx-auto rounded-lg border m-6 hover:cursor-pointer"
      />
      <div className="text-left">
        <h2 className="text-2xl font-bold my-4">{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  </div>
);

export default Modal;
