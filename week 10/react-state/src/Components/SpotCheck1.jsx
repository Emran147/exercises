import React from 'react'

export default function SpotCheck1() {
    const logHover = () => {
       alert("I was hovered!")
      }

  return (
    <div>
        SpotCheck1
        <br></br>
        <button onMouseEnter={logHover} > hover over me </button>


    </div>
  )
}
