// a <main> element with the following components inside:
  // an array of Article components (one component for each post passed down as a prop to ArticleList)
  // make sure to assign a unique key prop to each Article

  import React from "react";
import Article from "./Article";


export default function ArticleList({ posts }) {

  return (
    <main>
      {posts.map(post => (
        <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
         />
      ))}
    </main>
  )
}