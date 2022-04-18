import React, { useState } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    posts.filter(p => p.id !== post.id);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список постов" />

      {/* <Counter /> */}
    </div>
  );
}

export default App;
