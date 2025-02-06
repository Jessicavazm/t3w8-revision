import React, { createContext, useContext, useState } from 'react';

// Create an instance of Context
const WatchlistContext = createContext();

// Create the Provider function
export default function WatchlistProvider({ children }) {
    // Define state variables
    const [watchlist, setWatchlist] = useState([]);

    // Define different functions
    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
    };

    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((movie) => movie.id != id))
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