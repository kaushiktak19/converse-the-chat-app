import React from 'react';
import { AuthProvider } from './context/AuthContext';
// import Login from './components/Login';
import AuthToggle from './components/AuthTOggle';
// import Signup from './components/Signup';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <AuthToggle />
      </div>
    </AuthProvider>
  );
};

export default App;
