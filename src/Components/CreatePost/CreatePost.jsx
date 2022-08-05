import React, {useState} from "react";
import './CreatePost.css'

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
                <div className="wrap">
                <input type='text' style={{'margin': '1em'}} value={name} onChange={(event) => setName(event.target.value)}/>
                </div>               
                <label>Post</label>
                <div className="wrap">
                <input type="text" style={{'margin': '1em'}} value={userPost} onChange={(event) => setUserPost(event.target.value)}/>  
                </div>  
                <button type="submit" className="btn btn-primary" >Post</button>          
            </div>
                
        </form>
     );
}
 
export default CreatePost;