import React, { useState } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';

import './App.css';
import MyButton from './components/UI/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список постов" />

      {/* <Counter /> */}
    </div>
  );
}

export default App;
