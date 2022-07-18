import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './routes/Home/Home';
import Auth from './routes/Auth/Auth';
import React from 'react';

export default function App() {


  return (
    <Router>
      <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}