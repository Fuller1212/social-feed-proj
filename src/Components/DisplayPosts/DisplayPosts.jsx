import Post from "../Post/Post";


const DisplayPosts = (props) => {
    return ( 
      <div className="form-group">         
          {props.parentPost.map((postData) => {
            return (
              <Post data={postData} />
                // <><p><strong>{post.name}</strong>
                // </p><p>{post.userPost}</p></>             
            )
          })}
        
      </div> );
}
 
export default DisplayPosts;