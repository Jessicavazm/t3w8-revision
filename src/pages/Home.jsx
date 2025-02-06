import axios from 'axios';
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Home() {
    // Create the variables for useState
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        // Using fetch()
        // const response = await fetch(`http://www.omdbapi.com/${apiKey}/${query}`);

        // Using axios()
        if (query) {
            const response = await axios.get(`http://www.omdbapi.com/`, {
                params: {
                    apikey: 'a563e4cf',
                    s: query
                }
            });
            console.log(response.data)
            // this function updates the movies state
            setMovies(response.data.Search || []);
        }
    };


    return (
        <div>
            <h1>Movie Search</h1>
            <input
                type='text'
                placeholder='Search for Movies...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={fetchMovies}>Search</button>

            <div>
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}