import React, { useState, useEffect } from 'react';
import PostService from './components/API/PostService';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';
import Loader from './components/Loader/Loader';

import './App.css';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 40 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr className="delimiter"></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List of posts"
        />
      )}
    </div>
  );
}

export default App;
