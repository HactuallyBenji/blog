import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import LinearRegressionPost from "./components/LinearRegressionPost";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import MultiClassClassificationPost from "./components/MultiClassClassificationPost";
import { useState } from "react";
import ABTestAnalysis from "./components/ABTestAnalysis";
import SoftmaxRegressionPost from "./components/SoftmaxRegressionPost";

function App() {
  const [activePost, setActivePost] = useState(null);

  const openModal = (postType) => {
    setActivePost(postType);
  };

  const closeModal = () => {
    setActivePost(null);
  };

  const renderModalContent = () => {
    switch (activePost) {
      case "linearRegression":
        return <LinearRegressionPost onClose={closeModal} />;
      case "multi-classClassification":
        return <MultiClassClassificationPost onClose={closeModal} />;
      case "ABTestAnalysis":
        return <ABTestAnalysis onClose={closeModal} />;
      case "softmaxRegression":
        return <SoftmaxRegressionPost onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <BlogList onPostClick={openModal} />
      </main>
      {activePost && <Modal onClose={closeModal}>{renderModalContent()}</Modal>}
      <Footer />
    </div>
  );
}

export default App;
