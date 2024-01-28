import React from 'react'
import Message from './Message'

export default function Conversation(props) {
  return (
    <div>
      <div className='conversation-container'>
        {props.conversation.convo.map((con,index)=><Message  message={con} contact={props.conversation.with} key={index}/>)}
      </div>
      <button onClick={()=>props.resetDisplayConversation(null)}>Back</button>
    </div>
  )
}
