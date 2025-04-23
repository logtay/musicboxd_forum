import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {

    const [count, setCount] = useState(0);
    updateCount = () => {
        setCount((count ) => count + 1);
    }

    return( <div className="card">
        <Link to={`/posts/${post.id}`}>
            <img src={post.image} alt="Post Image" />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
        </Link>
        <button onClick={updateCount}>Upvote</button>
        <p>Upvotes: {count}</p>
        </div>);
};
export default Card;