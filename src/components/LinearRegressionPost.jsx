import React from "react";
import LinearRegressionGraph from "./LinearRegressionGraph";
import HeaderImage from "./HeaderImage";

const LinearRegressionPost = ({ onClose }) => {
  return (
    <div>
      <HeaderImage
        imgSource="./images/linear_regression.png"
        alt="Linear Regression"
        onClose={onClose}
      />
      <h1>Understanding Linear Regression</h1>
      <p>... Your introduction and explanation ...</p>
      <LinearRegressionGraph />
      <p>... Further explanation ...</p>
    </div>
  );
};

export default LinearRegressionPost;
