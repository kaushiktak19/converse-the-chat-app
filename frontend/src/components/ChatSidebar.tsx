import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface ChatSidebarProps {
  onSelectUser: (username: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const { logout } = useAuth(); 

  useEffect(() => {
    // Fetch all users except the logged-in one
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (!token) {
          console.error('No token found, redirecting to login');
          // Handle redirection to login page if no token is found
          return;
        }

        const response = await axios.get('http://localhost:4000/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
          },
        });
        setUsers(response.data.users);
      } catch (error) {
        // TypeScript needs to know what type `error` is
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 401) {
            console.error('Unauthorized, redirecting to login');
            // Handle redirection to login page if unauthorized
          } else {
            console.error('Error fetching users:', error.message);
          }
        } else {
          console.error('Error fetching users:', (error as Error).message);
        }
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => user.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-1/4 bg-gray-200 p-4">
        <button
        onClick={logout}
        className="mb-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg border"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user}
            onClick={() => onSelectUser(user)}
            className="p-2 cursor-pointer hover:bg-gray-300 rounded-lg"
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
