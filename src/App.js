import React, { useState, useMemo } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';

import './App.css';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [
        ...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])),
      ];
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(posts =>
      posts.title.toLocaleLowerCase().includes(filter.query),
    );
  }, [filter.query, sortedPosts]);

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
