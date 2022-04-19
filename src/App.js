import React, { useState } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ getSortedPosts');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      );
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPost = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr className="delimiter"></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Список постов"
        />
      ) : (
        <h1 className="main"> Posts not found!</h1>
      )}

      {/* <Counter /> */}
    </div>
  );
}

export default App;
