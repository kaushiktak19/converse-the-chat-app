import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
//import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      //toast.success('Login successful!');
    } catch (error) {
      if (error instanceof Error) {
        //toast.error(`Login failed: ${error.message}`);
      } else {
       // toast.error('Login failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
      />
      <button type="submit" className="bg-orange-500 text-white p-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
        Login
      </button>
    </form>
  );
};

export default Login;
