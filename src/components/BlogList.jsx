import React from "react";
import LinearRegressionPreview from "./LinearRegressionPreview";
import MultiClassClassificationPreview from "./MultiClassClassificationPreview";
import ABTestAnalysisPreview from "./ABTestAnalysisPreview";
import SoftmaxRegressionPreview from "./SoftmaxRegressionPreview";
import posts from "../data.js";

const BlogList = ({ onPostClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <LinearRegressionPreview
        post={posts[0]}
        onClick={() => onPostClick("linearRegression")}
      />
      <MultiClassClassificationPreview
        post={posts[1]}
        onClick={() => onPostClick("multi-classClassification")}
      />
      <ABTestAnalysisPreview
        post={posts[2]}
        onClick={() => onPostClick("ABTestAnalysis")}
      />
      <SoftmaxRegressionPreview
        post={posts[3]}
        onClick={() => onPostClick("softmaxRegression")}
      />
    </div>
  );
};

export default BlogList;
