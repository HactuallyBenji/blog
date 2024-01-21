import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { useState } from "react";
import Post from "./components/Post";
import posts from "./data";

function App() {
  const [activePost, setActivePost] = useState(null);

  const openModal = (postType) => {
    setActivePost(postType);
  };

  const closeModal = () => {
    setActivePost(null);
  };

  const renderModalContent = () => {
    const postData = posts.filter((post) => post.id === activePost)[0];
    return <Post post={postData} />;
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
