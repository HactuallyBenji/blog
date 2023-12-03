import React from "react";

const LinearRegressionPreview = ({ onClick }) => (
  <div className="border border-gray-300 p-4 cursor-pointer" onClick={onClick}>
    <img
      src="path-to-thumbnail.jpg"
      alt="Linear Regression"
      className="w-full h-40 object-cover mb-2"
    />
    <h2 className="text-xl font-bold mb-2">Understanding Linear Regression</h2>
    <p className="text-gray-700">
      An interactive exploration of linear regression in data science.
    </p>
  </div>
);

export default LinearRegressionPreview;
