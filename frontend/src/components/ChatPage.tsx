import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';

const ChatPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      <ChatSidebar onSelectUser={setSelectedUser} />
      <ChatWindow selectedUser={selectedUser} />
    </div>
  );
};

export default ChatPage;
