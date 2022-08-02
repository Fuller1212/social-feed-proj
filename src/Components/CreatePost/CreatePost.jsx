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
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handlePost} className='form-grid'>
            <div className="form-group">
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type="text" value={userPost} onChange={(event) => setUserPost(event.target.value)}/>
            </div>
                <button type="submit" className="btn btn-primary" >Create</button>
        </form>
     );
}
 
export default CreatePost;