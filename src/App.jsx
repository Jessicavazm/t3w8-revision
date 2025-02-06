// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/home';


function App() {

  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/watchlist' element={<div>WatchList</div>} />
        <Route path ='/details/:id' element={<div>Details</div>} />
      </Routes>
    </Router>
    
  )
}

export default App
