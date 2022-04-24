import React from 'react';
import PostItem from '../PostItem';
import styles from './PostList.module.scss';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 className={styles.main}> Posts not found!</h1>;
  }
  return (
    <div>
      <h1 className="title">{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
