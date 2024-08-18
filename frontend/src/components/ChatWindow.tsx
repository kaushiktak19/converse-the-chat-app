import React from 'react';
import ChatInput from './ChatInput.tsx';

interface ChatWindowProps {
  selectedUser: string | null;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedUser }) => {
  return (
    <div className="w-3/4 flex flex-col justify-between">
      {selectedUser ? (
        <>
          <div className="p-4 border-b">
            <h2 className="text-2xl font-semibold">{selectedUser}</h2>
          </div>
          <div className="flex-grow p-4">
            {/* Chat messages would go here */}
          </div>
          <ChatInput />
        </>
      ) : (
        <div className="flex justify-center items-center flex-grow">
          <h2>Select a user to start chatting</h2>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
