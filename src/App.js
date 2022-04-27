import React, { useState } from 'react';
import axios from 'axios';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';

import './App.css';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  async function fetchPosts() {
    const responce = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    setPosts(responce.data);
  }

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: 40 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr className="delimiter"></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="List of posts"
      />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
