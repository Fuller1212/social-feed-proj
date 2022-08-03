

const DisplayPosts = (props) => {
    return ( 
      <table className="form-group">
         
          {props.parentPost.map((post,) => {
            return (
              <tbody>
                <tr><strong>{post.name}</strong></tr>
                <tr>{post.userPost}</tr>
              </tbody>
            )
          })}
        
    </table> );
}
 
export default DisplayPosts;