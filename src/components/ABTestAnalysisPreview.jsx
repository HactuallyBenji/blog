import React from "react";

const ABTestAnalysisPreview = ({ onClick }) => (
  <div className="border border-gray-300 p-4 cursor-pointer" onClick={onClick}>
    <img
      src="./images/ab_test_analysis.png"
      alt="AB Test"
      className="w-full h-40 object-cover mb-2"
    />
    <h2 className="text-xl font-bold mb-2">An AB test analysis</h2>
    <p className="text-gray-700">
      An exploration of AB test analysis in data science.
    </p>
  </div>
);

export default ABTestAnalysisPreview;
