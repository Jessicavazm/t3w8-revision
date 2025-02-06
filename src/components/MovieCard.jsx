import React from 'react';

// ({movie}) => this is destructuring in the parameter itself to easy access
export default function MovieCard({movie}) {
    return(
        <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />

        </div>
    )
}