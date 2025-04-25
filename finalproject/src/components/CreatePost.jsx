import { useState } from 'react';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({title: "", author: "", body: "", image: "" })
    
   const createPost = async (event) => {
        event.preventDefault();

        await supabase
        .from('posts')
        .insert({ title: post.title, author: post.author, body: post.body, image: post.image })
        .select();
        
        window.location = "/";
      }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

        return (
            <div className="create-post">
                <h1>Create Post</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title<span style={{color: 'red'}}>*</span></label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={handleChange}
                            required
                            placeholder="Title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <textarea
                            id="body"
                            name="body"
                            onChange={handleChange}
                            placeholder="Content (Optional)"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            onChange={handleChange}
                            placeholder="Image URL (Optional)"
                        />
                    </div>

                    <button type="submit" onClick={createPost}>
                        Create Post
                    </button>
                </form>
            </div>
        );
    }

export default CreatePost;