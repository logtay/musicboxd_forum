import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from 'react-icons/fa'; 

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>Posted: {new Date(post.created_at).toLocaleString()}</p>
      <p>
        <FaThumbsUp /> {post.upvotes}
      </p>
    </div>
  );
};

export default Card;
