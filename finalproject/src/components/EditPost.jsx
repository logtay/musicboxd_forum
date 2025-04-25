import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client.js";

const EditPost = () => {
    const [post, setPost] = useState({ title: "", body: "", image: "", flair: "None" });
    const { id } = useParams();
    const flairs = ["None", "Review", "Experience", "News", "Discussion", "Hot Take"];

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

    const editPost = async (event) => {
        event.preventDefault();

        await supabase
            .from("posts")
            .update({
                title: post.title,
                body: post.body,
                image: post.image,
                flair: post.flair, 
            })
            .eq("id", id)
            .select();

        window.location = `/post/${id}`;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value, 
        }));
    };

    return (
        <div className="edit-post">
            <h1>Edit Post</h1>
            <form onSubmit={editPost}>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <textarea
                    name="body"
                    value={post.body}
                    onChange={handleChange}
                    placeholder="Body"
                />

                <input
                    type="text"
                    name="image"
                    value={post.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                />

                <div className="form-group">
                    <label htmlFor="flair">Flair: </label>
                    <select
                        name="flair"
                        id="flair"
                        value={post.flair} 
                        onChange={handleChange}
                    >
                        {flairs.map((flair) => (
                            <option key={flair} value={flair}>
                                {flair}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
