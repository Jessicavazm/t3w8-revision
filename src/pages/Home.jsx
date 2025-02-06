import React, { useState } from 'react';

export default function Home () {
    // Create the variables for useState
    const [query, setQuery] = useState('');

    const fetchMovies = async() => {
        // Using fetch()
        // const response = await fetch(`http://www.omdbapi.com/${apiKey}/${query}`);

    }
 

    return (
        <div>
            <h1>Movie Search</h1>
            <input
            type='text'
            placeholder='Search for Movies...'
            />
            <button>Search</button>
        </div>
    )
}