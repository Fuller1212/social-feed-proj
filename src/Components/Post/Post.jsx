import { useState } from "react";

const Post = (props) => {

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
            
        </form>
     );
}
 
export default Post;