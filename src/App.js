import React, {useState} from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";

function App() {

const [posts, setPosts] = useState([])

function addNewPost(post){
  let tempPost = [...posts, post];

  setPosts(tempPost)
}

  return (
    <><div>
      <NavBar />
    </div><div className="col-md-6">
        <div className="border-box">
          <CreatePost addNewPostProperty={addNewPost} />
        </div>
        <div className="border-box">
          <DisplayPosts parentPost ={posts}/>
        </div>
      </div></>
  );
}

export default App;
