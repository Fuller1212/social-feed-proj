import { useState } from "react";

const Post = ({data}) => {
    return ( 
        <>
            <p><strong>{data.name}</strong></p>
            <p>{data.userPost}</p>
        </> 
     );
}
 
export default Post;