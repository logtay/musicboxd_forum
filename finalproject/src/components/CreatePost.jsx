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

        return (<div className="create-post">
            <form>
                <label for="title">Title</label>
                <input type="text" id="title" name="title"  onChange={handleChange} required />
                
                <label for="author">Author</label>
                <input type="text" id="author" name="author" onChange={handleChange} />
                
                <label for="body">Body</label>
                <textarea id="body" name="body" onChange={handleChange}></textarea>
                
                <label for="image">Image URL</label>
                <input type="text" id="image" name="image" onChange={handleChange} />
                
                <button type="submit" value="Submit" onClick={createPost}>Create Post</button>
            </form>
        </div>
        )
    }

export default CreatePost;