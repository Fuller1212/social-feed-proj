import React, {useState} from "react";

function App() {

const [posts, setPosts] = useState([])

function addNewPost(post){
  let tempPost = [...posts, post]

  setPosts(tempPost)
}

  return (
    <div className="App">
    </div>
  );
}

export default App;
