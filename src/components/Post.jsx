import React from "react";
import HeaderImage from "./HeaderImage";

const Post = ({ post, onClose }) => {
  return (
    <>
      <div className="absolute flex justify-center items-center top-4 left-4 w-20">
        <HeaderImage
          imgSource={post.thumbnail}
          alt={post.title}
          onClose={onClose}
        />
      </div>
      <div className="h-screen">
        <div className="h-[10%]"></div>
        <div className="h-[90%] flex justify-center items-end">
          <iframe
            title={post.title}
            src={post.frame}
            className="h-full w-11/12"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Post;
