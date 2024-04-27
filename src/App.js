import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Profile from './Profile';
import { UserProvider } from './UserContext';
import "./App.css";

const App = () => (
  <div className='main'>
    <header>
      <div>Header</div>
      <div style={{display : "flex" , justifyContent: "space-between" , width: "120px"}}>
        <div>Signup</div>
        <div>Profile</div>
      </div>
    </header>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </UserProvider>
  </div>
);

export default App;
