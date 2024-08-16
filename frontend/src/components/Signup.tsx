import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      toast.success('Signup successful!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Signup failed: ${error.message}`);
      } else {
        toast.error('Signup failed. Please try again.');
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
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
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
        Signup
      </button>
    </form>
  );
};

export default Signup;
