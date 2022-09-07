import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
