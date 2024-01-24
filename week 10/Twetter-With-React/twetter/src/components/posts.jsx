import React from 'react'
import '../cssFiles/Posts.css'



export default function Posts({ postContent }) {
  return (
    <div className="post">
      <h2>Post Content:</h2>
      <p>{postContent}</p>
      <button>
        add comment 
      </button>
      <button>
        Delete The Post
      </button>

    </div>
  )
}
