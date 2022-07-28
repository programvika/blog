import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import CreatePost from './pages/CreatePost/CreatePost';
import PostPage from './pages/PostPage/PostPage';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.menu}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
