import React from "react";

const MultiClassClassificationPreview = ({ onClick }) => (
  <div className="border border-gray-300 p-4 cursor-pointer" onClick={onClick}>
    <img
      src="./images/multi-class_classification.png"
      alt="Linear Regression"
      className="w-full h-40 object-cover mb-2"
    />
    <h2 className="text-xl font-bold mb-2">
      Understanding Multi-Class Classification
    </h2>
    <p className="text-gray-700">
      An interactive exploration of softmax regression in data science.
    </p>
  </div>
);

export default MultiClassClassificationPreview;
