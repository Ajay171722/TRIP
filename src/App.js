import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TripPlanner from './components/TripPlanner';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <TripPlanner username={username} />
      )}
    </div>
  );
}

export default App; 