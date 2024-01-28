import React from 'react'
import Contact from './Contact'
export default function List({contactName,displayConvo}) {
  return (
    <div>
        <Contact contactName={contactName} displayConvo={displayConvo}/>
    </div>
  )
}
