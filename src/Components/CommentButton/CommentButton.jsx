import { useState } from "react";
import './CommentButton.css'

const CommentButton = ({}) => {

const [liked, setLiked] = useState(false);
const [disliked, setDisliked] = useState(false);

const likedButtonClass = liked ? 'green' : ''
const dislikedButtonClass = disliked ? 'red' : ''

function handleLikeButton(){
        setLiked(true)
        setDisliked(false)
    
    
}


function handleDislikeButton(){
        setDisliked(true)
        setLiked(false)
    
}
    return ( 
        <div>
            <button className={likedButtonClass} onClick={handleLikeButton}>Like</button>
            <button className={dislikedButtonClass}  onClick={handleDislikeButton}>Dislike</button>
        </div>
     );
}
 
export default CommentButton;