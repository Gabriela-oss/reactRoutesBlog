//Libs
import React from "react";
//Styles

const Post = ({title, content}) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Post;