import React from 'react'
import Article from './Article'

export default function Wardrobe(props) {
  return (
    <div>
        <Article wardrobe={props.wardrobe}/>
    </div>
  )
}
