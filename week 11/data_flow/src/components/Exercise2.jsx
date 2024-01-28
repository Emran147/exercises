import React, { useState } from 'react';
import List from './List';
import Conversation from './Conversation';

export default function Exercise2() {
    const [data, setData] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    });

    const displayConvo = function(name) {
        setData({ ...data, displayConversation: name });
    };
 

    const selectedConversation = data.displayConversation ? 
        data.conversations.find(convo => convo.with === data.displayConversation) : null;

    if (!data.displayConversation) {
        return (
            <div>
                {data.conversations.map((convrs, index) => (
                    <List contactName={convrs.with} displayConvo={displayConvo} key={index} />
                ))}
            </div>
        );
    } else {
        return (
            <div>
                <Conversation conversation={selectedConversation}  resetDisplayConversation={displayConvo} />
            </div>
        );
    }
}
