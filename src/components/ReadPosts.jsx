import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

const ReadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("created_at");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("posts")
        .select()
        .order("created_at", { ascending: true });

      setPosts(data);
    };
    fetchPosts();
  }, []);

  const sortPosts = [...posts].sort((a, b) => {
    if (sort === "created_at") {
      return new Date(b.created_at) - new Date(a.created_at);
    } else if (sort === "upvotes") {
      return b.upvotes - a.upvotes;
    }
    return 0;
  });

  const search = searchParams.get("search") || "";  
  const filteredPosts = sortPosts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase()); 
  });

  return (
    <div className="read-posts">
<div className="sort-buttons">
  <span>Order by:</span>
  <button onClick={() => setSort("created_at")}>Newest</button>
  <button onClick={() => setSort("upvotes")}>Most Popular</button>
</div>

      {filteredPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
export default ReadPosts;