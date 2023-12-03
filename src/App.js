import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import LinearRegressionPost from "./components/LinearRegressionPost";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import posts from "./data";
import { useState } from "react";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showLinearRegression, setShowLinearRegression] = useState(false);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const openLinearRegression = () => {
    setShowLinearRegression(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setShowLinearRegression(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <BlogList
          posts={posts}
          onClick={openPost}
          onLinearRegressionClick={openLinearRegression}
        />
      </main>
      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
      {showLinearRegression && <LinearRegressionPost />}
      <Footer />
    </div>
  );
}

export default App;
