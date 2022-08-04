import CommentButton from "../CommentButton/CommentButton";
import Post from "../Post/Post";


const DisplayPosts = (props) => {
    return ( 
      <div className="form-group">         
          {props.parentPost.map((postData) => {
            return (
              <div>                
                <Post data={postData} />               
              <div>
                  <CommentButton />
              </div>
              </div>            
            )
          })}
        
      </div> );
}
 
export default DisplayPosts;