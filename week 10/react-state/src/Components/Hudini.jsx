import React, { useState } from 'react'

export default function Hudini() {
    let [show,setShow]=useState(false)
    const changeFunc=function(){
        setShow(show ? false :true)
    }
  return (
    <div>
        {show?'Now you see me':'Now you don’t'}
        <button onClick={changeFunc}>change show</button>
    </div>
  )
}
