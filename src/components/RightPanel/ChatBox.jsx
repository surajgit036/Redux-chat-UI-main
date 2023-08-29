import React from 'react'
import LeftChatBubble from './LeftChatBubble';
import RightChatBubble from './RightChatBubble';

export default function ChatBox({currmessage}) {
  return (
    <div className='chatbox'> 
    {currmessage.chatlog.length === 0 && <div className='text-center'>Start a new Conversation</div>}
    {currmessage.chatlog.map((chat) => {
      return (
        <>
          {chat.sender === "user" ? (
            <LeftChatBubble chat={chat} image={currmessage.id} key={chat.message_id} />
          ) : (
            <RightChatBubble chat={chat} key={chat.message_id} />
          )}
        </>
      );
    })}
   </div>
  )
}
