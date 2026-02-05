import React from 'react';
import "./PostCard.css"

function PostCard({ title, body }) {
  return (
    <div className="postcard">
      <p className="postcard_title">{title}</p>
      <p className="postcard_body">{body}</p>
    </div>
  );
}

export default PostCard;