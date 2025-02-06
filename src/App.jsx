// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import WatchlistProvider from './context/WatchlistContext';
import Watchlist from './pages/Watchlist';

function App() {

  return (
    <WatchlistProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/details/:id' element={<div>Details</div>} />
        </Routes>
      </Router>
    </WatchlistProvider>
  )
}

export default App
