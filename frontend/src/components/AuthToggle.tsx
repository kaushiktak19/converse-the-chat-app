import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthToggle: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex border-b border-gray-300">
          <button
            className={`flex-1 py-3 text-lg font-medium text-center transition-colors duration-300 ${isLogin ? 'bg-orange-400 text-white' : 'bg-gray-100 text-gray-700 hover:bg-orange-200'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 text-lg font-medium text-center transition-colors duration-300 ${!isLogin ? 'bg-orange-400 text-white' : 'bg-gray-100 text-gray-700 hover:bg-orange-200'}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <div className="p-6">
          {isLogin ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default AuthToggle;
