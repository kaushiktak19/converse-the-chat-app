import React, { useState } from 'react';

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Send message logic goes here
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="p-4 border-t">
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-orange-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
