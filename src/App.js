import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import TripPlanner from './components/TripPlanner';
import BookingPage from './components/BookingPage/BookingPage';
import ChatBox from './components/ChatBox/ChatBox';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<TripPlanner username={username} />} />
              <Route path="/booking" element={<BookingPage />} />
            </>
          )}
        </Routes>
        {isLoggedIn && <ChatBox />}
      </div>
    </Router>
  );
}

export default App; 