import React from 'react';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import Forms from './Components/Forms';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="add" element={<Forms />} />
          <Route path="*" element={<div>404 Not Found! <Navigate to="/" /></div>} />
        </Routes>
      </div>
   </BrowserRouter>
  );
}


