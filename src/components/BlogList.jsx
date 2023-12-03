import React from "react";
import BlogPost from "./BlogPost";
import LinearRegressionPreview from "./LinearRegressionPreview";
import MultiClassClassificationPreview from "./MultiClassClassificationPreview";

const BlogList = ({ onPostClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <LinearRegressionPreview onClick={() => onPostClick("linearRegression")} />
    <MultiClassClassificationPreview
      onClick={() => onPostClick("multi-classClassification")}
    />
  </div>
);

export default BlogList;
