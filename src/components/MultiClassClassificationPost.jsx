import React from "react";
import LinearRegressionGraph from "./LinearRegressionGraph";
import HeaderImage from "./HeaderImage";

const MultiClassClassificationPost = ({ onClose }) => {
  return (
    <div>
      <HeaderImage
        imgSource="./images/multi-class_classification.png"
        alt="Linear Regression"
        onClose={onClose}
      />
      <h1>Understanding Multi-class classification</h1>
      <p>... Your introduction and explanation ...</p>
      <LinearRegressionGraph />
      <p>... Further explanation ...</p>
    </div>
  );
};

export default MultiClassClassificationPost;
