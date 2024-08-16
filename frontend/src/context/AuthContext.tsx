import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface AuthContextType {
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      if (error instanceof Error) {
        toast.error(`Login failed: ${error.message}`);
      } else {
        toast.error('Login failed: An unknown error occurred.');
      }
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      await axios.post('http://localhost:4000/api/auth/signup', { username, email, password });
      toast.success('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      if (error instanceof Error) {
        toast.error(`Signup failed: ${error.message}`);
      } else {
        toast.error('Signup failed: An unknown error occurred.');
      }
    }
  };

  return (
    <AuthContext.Provider value={{ login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
