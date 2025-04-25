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
                <input type="text" id="title" name="title"  onChange={handleChange} required placeholder='Title' />
                
                <textarea id="body" name="body" onChange={handleChange} placeholder='Content (Optional)'></textarea>
                
                <input type="text" id="image" name="image" onChange={handleChange} placeholder='Image URL (Optional)' />
                
                <button type="submit" value="Submit" onClick={createPost}>Create Post</button>
            </form>
        </div>
        )
    }

export default CreatePost;