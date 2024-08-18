import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthToggle from './components/AuthToggle';
import ChatPage from './components/ChatPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<AuthToggle />} />
          <Route path="/chat" element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          } />
          <Route path="/" element={<AuthToggle />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
