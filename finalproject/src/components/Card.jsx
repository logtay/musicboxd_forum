import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from 'react-icons/fa'; 
import { formatDistanceToNow } from 'date-fns';

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>Posted {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</p>
      <p>
        <FaThumbsUp /> {post.upvotes}
      </p>
    </div>
  );
};

export default Card;
