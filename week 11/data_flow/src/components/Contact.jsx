import React from 'react'

export default function Contact(props) {
  return (
    <div onClick={()=>props.displayConvo(props.contactName)}>{props.contactName}</div>
  )
}
