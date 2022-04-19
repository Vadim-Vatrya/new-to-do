import React, { useState } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPost = sort => {
    setSelectedSort(sort);
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr className="delimiter"></hr>
      <div>
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
      {/* <div>
        <MySelect
          defaultValue="Cортировка"
          option={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div> */}
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 className="main"> Posts not found!</h1>
      )}

      {/* <Counter /> */}
    </div>
  );
}

export default App;
