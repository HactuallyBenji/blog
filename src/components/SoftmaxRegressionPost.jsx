import React from "react";
import HeaderImage from "./HeaderImage";

const softmaxRegressionPost = ({ onClose }) => {
  return (
    <>
      <div className="absolute flex justify-center items-center top-4 left-4 w-20">
        <HeaderImage
          imgSource="./images/softmax_regression.png"
          alt="Softmax Regression"
          onClose={onClose}
        />
      </div>
      <div className="h-screen">
        <div className="h-[10%]"></div>
        <div className="h-[90%] flex justify-center items-end">
          <iframe
            title="Softmax Regression"
            src="./frames/softmax_regression.html"
            className="h-full w-11/12"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default softmaxRegressionPost;
