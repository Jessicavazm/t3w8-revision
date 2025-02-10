import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { Link } from 'react-router-dom';

// ({movie}) => this is destructuring in the parameter itself to easy access
export default function MovieCard({ movie }) {

    // Import useWatchlist Hook
    const { addToWatchlist } = useWatchlist();

    return (
        <div className="col-md-4 movie-card" style={{ maxWidth: '18 rem' }}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className='card-img-top' />
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
            <Link to={`/details/${movie.imdbID}`} className='btn btn-primary'>View Details</Link>
        </div>
    )
}