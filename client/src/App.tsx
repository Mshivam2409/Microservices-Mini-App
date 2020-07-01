import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <Post set={setNum} num={num} />
      <PostList num={num} />
    </div>
  );
}

export default App;
