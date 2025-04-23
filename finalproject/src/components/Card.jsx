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
            <h2>{post.title}</h2>
        </Link>
        <p>{new Date(post.created_at).toLocaleString()}</p>
        <p>{post.upvotes}</p>
        </div>);
};
export default Card;