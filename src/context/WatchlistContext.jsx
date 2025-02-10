import React, { createContext, useContext, useState } from 'react';
import { useNotification } from './NotificationContext';

// Create an instance of Context
const WatchlistContext = createContext();

// Create the Provider function
export default function WatchlistProvider({ children }) {
    // Define state variables
    const [watchlist, setWatchlist] = useState([]);
    const {showNotification} = useNotification();

    // Define different functions
    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
        showNotification(`${movie.Title} added to watchlist!`);
    };

    const removeFromWatchlist = (imdbID) => {
        setWatchlist((prev) => prev.filter((movie) => movie.imdbID != imdbID));
        showNotification('Movie removed from watchlist.');

    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    )
}

// Create a custom hook here
export function useWatchlist(){

    let context = useContext(WatchlistContext);
    if (!context){
        console.log("No movies added.");
    }
    return context;
}