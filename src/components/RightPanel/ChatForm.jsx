import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../Store';

export default function ChatForm({ currmessage }) {
  const [message, setMessage] = React.useState('');
  const dispatch = useDispatch();

  const sendMessage = () => {
    const trimmedMessage = message.trim(); // Trim leading and trailing spaces
    
    if (trimmedMessage !== "") { // Check if the trimmed message is not empty
      const newMessageObject = {
        text: trimmedMessage,
        sender: 'me',
        timestamp: new Date().toLocaleString(),
        message_id: currmessage.chatlog.length + 1,
      };
      
      dispatch(add({ id: currmessage.id, message: newMessageObject }));
    }
    
    setMessage('');
  };
  

  return (
    <div className="chat-form">
      <input
        type="text"
        value={message}
        required={true}
        placeholder="Type a message"
        onChange={(e) => setMessage(e.target.value)}
        className="chat-input"
      />

      <button className="send-button" onClick={sendMessage}>
        <i className="fa-solid fa-paper-plane fa-lg"></i>
      </button>
    </div>
  );
}
