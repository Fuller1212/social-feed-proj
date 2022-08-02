import React, {useState} from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import NavBar from "./Components/NavBar/NavBar";

function App() {

const [posts, setPosts] = useState([])

function addNewPost(post){
  let tempPost = [...posts, post]

  setPosts(tempPost)
}

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
