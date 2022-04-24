import React, { useState, useMemo } from 'react';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'Python', body: 'Description' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

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
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr className="delimiter"></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
