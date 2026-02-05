import React, { useState, useEffect } from 'react';
import PostCard from '../PostCard/PostCard';
import "./Posts.css"

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className="posts">
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </main>
  );
}

export default Posts;