// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import WatchlistProvider from './context/WatchlistContext';
import Watchlist from './pages/Watchlist';
import Navbar from './components/Navbar';
import Details from './pages/details';
import NotificationProvider from './context/NotificationContext';
import NotificationBar from './components/NotificationBar';

function App() {

  return (
    <NotificationProvider>
      <WatchlistProvider>
        <Router>
          <NotificationBar />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </Router>
      </WatchlistProvider>
    </NotificationProvider>
  )
}

export default App
