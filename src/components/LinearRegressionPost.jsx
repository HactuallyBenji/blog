import React from "react";
import LinearRegressionGraph from "./LinearRegressionGraph";
import HeaderImage from "./HeaderImage";

const LinearRegressionPost = ({ onClose }) => {
  return (
    <>
      <div className="absolute flex justify-center items-center top-4 left-4 w-20">
        <HeaderImage
          imgSource="./images/linear_regression.png"
          alt="AB Testing"
          onClose={onClose}
        />
      </div>
      <div className="h-screen">
        <div className="h-[10%]"></div>
        <div className="h-[90%] flex justify-center items-end">
          <iframe
            src="./frames/Ad_click_ab_test.html"
            className="h-full w-11/12"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LinearRegressionPost;
