import { useState } from 'react';
import { supabase } from '../client.js';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", body: "", image: "" });

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('posts')
            .insert({ title: post.title, body: post.body, image: post.image })
            .select();

        window.location = "/";
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={createPost}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    required
                    placeholder="Title"
                />
                <textarea
                    id="body"
                    name="body"
                    onChange={handleChange}
                    placeholder="Content (Optional)"
                />
                <input
                    type="text"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    placeholder="Image URL (Optional)"
                />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;