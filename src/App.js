import React, { useState } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';

import './App.css';
import MyButton from './components/UI/MyButton';
import MyInput from './components/UI/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton disabled>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список постов" />

      {/* <Counter /> */}
    </div>
  );
}

export default App;
