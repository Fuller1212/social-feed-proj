import React, {useState} from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'

function App() {

const [posts, setPosts] = useState([])

function addNewPost(post){
  let tempPost = [...posts, post];

  setPosts(tempPost)
}

  return (
    <><div>
      <NavBar />
    </div><div className="background">
        <div className="border-box">
          <CreatePost addNewPostProperty={addNewPost} />
        </div>
        <div className="post">
          <DisplayPosts parentPost={posts}/>
        </div>
      </div></>
  );
}

export default App;
