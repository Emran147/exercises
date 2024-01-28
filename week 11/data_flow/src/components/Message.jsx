import React from 'react'

export default function Message({message,contact}) {
  return (
    <div>{message.sender==='self' ? 'me' : contact} :  {message.text}</div>
  )
}
