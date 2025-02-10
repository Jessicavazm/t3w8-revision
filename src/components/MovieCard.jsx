/* eslint-disable react/prop-types */
import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { Link } from 'react-router-dom';

// ({movie}) => this is destructuring in the parameter itself to easy access
export default function MovieCard({ movie }) {

    // Import useWatchlist Hook
    const { watchlist, addToWatchlist } = useWatchlist();

    const isInWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);

    return (
        <div className="col-md-4 movie-card" style={{ maxWidth: '18 rem' }}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className='card-img-top' />
            <button
                className={`btn ${isInWatchlist ? `btn-success` : `btn-primary`}`}
                // if its not in the watchlist, then add it to list
                onClick={() => !isInWatchlist && addToWatchlist(movie)}
                disabled={isInWatchlist}
            >
                {isInWatchlist ? `Added to Watchlist` : `Add to Watchlist`}
            </button>
            <Link to={`/details/${movie.imdbID}`} className='btn btn-primary'>View Details</Link>
        </div>
    )
}