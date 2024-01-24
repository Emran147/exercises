import React, { useState } from 'react'

export default function LikeCounter() {
    let [likeCounter,setLikeCounter]=useState(0)
    const likeFunc= function(){
        setLikeCounter(likeCounter+1)
    }
  return (
    <div>
        likes : <br></br>
    {likeCounter}
    <button onClick={likeFunc}>like </button>
    </div>
       
  ) 
}
