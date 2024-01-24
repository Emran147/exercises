import React from 'react'

export default function Landing({userName , hottestItem }) {
  return (
    <div>
         Welcome {userName}  ,  {hottestItem.item} ,  {hottestItem.price} $ 
    </div>
  )
}
