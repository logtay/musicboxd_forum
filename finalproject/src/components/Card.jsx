import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {

    return( <div className="card">
        <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
        </Link>
        <p>Posted: {new Date(post.created_at).toLocaleString()}</p>
        <p>{post.upvotes}</p>
        </div>);
};
export default Card;