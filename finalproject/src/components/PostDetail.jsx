import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { FaThumbsUp, FaTrash, FaEdit } from 'react-icons/fa'; 
import { formatDistanceToNow } from 'date-fns';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("posts")
        .select()
        .eq("id", id)
        .single();

      setPost(data);
    };
    fetchPost();
  }, [id]);

  const updateCount = async (event) => {
    event.preventDefault();

    const { data } = await supabase
      .from("posts")
      .update({ upvotes: post.upvotes + 1 })
      .eq("id", id)
      .select()
      .single();

    setPost(data); 
  };

const addComment = async (event) => {
  event.preventDefault();
  
  const newComments = post.comments ? [...post.comments, comment] : [comment];

  const { data } = await supabase
    .from("posts")
    .update({ comments: newComments })
    .eq("id", id) 
    .select()
    .single();

  setPost(data);
  setComment(""); 
};

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from("posts")
            .delete()
            .eq("id", id);

        window.location = "/";
    };

  if (!post) return null;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
     {post.flair !== "None" && (
  <p>
    <span className="flair">{post.flair}</span>
  </p>
)}


      <p><div className="posted-text">Posted {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</div></p>
      <p>{post.body}</p>
      {post.image && <img src={post.image} />}
      <div className="post-buttons">
  <div className="left">
    <button onClick={updateCount} className="upvote-button">
      <FaThumbsUp />
    </button> 
    <span>{post.upvotes}</span>
  </div>
  <div className="right">
    <Link to={`/edit/${post.id}`}>
      <button type="button"><FaEdit /></button>
    </Link>
    <button onClick={deletePost}><FaTrash/></button>
  </div>
</div>

      
    <div className="comments">
        {post.comments && post.comments.length > 0 && (
          post.comments.map((c, index) => (
            <p key={index}>- {c}</p>  
          ))
        )}
        <form onSubmit={addComment}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..." required
        />
        <button type="submit">Add Comment</button>
      </form>
      </div>
      
    </div>
  );
};

export default PostDetail;
