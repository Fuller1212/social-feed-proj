import React, {useState} from "react";

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [userPost, setUserPost] =useState('');
    
    function handlePost(event){
        event.preventDefault();
        let newPost ={
            name: name,
            userPost: userPost,
        };
        console.log(newPost)
    }

    return ( 
        <form onSubmit={handlePost} className='form-grid'>
            <div className="form-group">
                <label>Name</label>
                <input type='text' name="name"/>
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type="text" />
            </div>
                <button type="submit" className="btn btn-primary">Create</button>
        </form>
     );
}
 
export default CreatePost;