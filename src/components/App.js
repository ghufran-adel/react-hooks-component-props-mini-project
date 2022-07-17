import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

export default function App() {
  return (
    <div className="App">
      <Header name='Underreacted' />
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <About image='https://via.placeholder.com/215' about='A blog about learning React' />
      <ArticleList posts={blogData.posts}/>
    </div>
  )
}