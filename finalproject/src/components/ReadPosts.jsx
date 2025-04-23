import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "./Card";

const ReadPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase
                .from("posts")
                .select()
                .order("id", { ascending: true });

            setPosts(data);
        };
        fetchPosts();
    }
    , []);
    return (
        <div className="read-posts">
            {posts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    );
}
export default ReadPosts;