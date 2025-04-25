import { useState } from 'react';
import { supabase } from '../client.js';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", body: "", image: "" });
    const flairs = ["None", "Review", "Experience", "News", "Discussion", "Hot Take"];

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('posts')
            .insert({ title: post.title, body: post.body, image: post.image, flair: post.flair === "None" ? "" : post.flair})
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
            <h1>Edit Post</h1>
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
                <div className='form-group'>
                    <label htmlFor="flair">Flair: </label>
                    <select name="flair" id="flair" onChange={handleChange}>
                        {flairs.map((flair) => (
                            <option key={flair} value={flair}>
                                {flair}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;