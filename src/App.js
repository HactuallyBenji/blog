import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

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
