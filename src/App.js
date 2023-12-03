import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import posts from "./data";
import { useState } from "react";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <BlogList posts={posts} onClick={openModal} />
      </main>
      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
      <Footer />
    </div>
  );
}

export default App;
