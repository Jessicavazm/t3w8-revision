import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
    // useParams hook that fetches the parameter value from URL
    const { id } = useParams();
    // Store parameter value in the state to use it in the future
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // Make a request to the API
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=a563e4cf&i=${id}`);
                const data = await response.json();

                if (data.Response == 'True') {
                    // Updates the component state with the fetched movie details
                    setMovieDetails(data);
                } else {
                    setMovieDetails(null);
                }
            } catch (error) {
                console.error('Failed to fetch movie details', error)
            } finally {
                setLoading(false);
            }
        }
        // Call the fn
        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (!movieDetails) {
        return <p>Movies details not found!</p>
    }

    return (
        // Make sure you start with div
        <div>
            <h2>{movieDetails.Title}</h2>
            <p>{movieDetails.Year}</p>
            <img src={movieDetails.Poster}
                alt={`${movieDetails.Title} Poster`}
                className='card-img-top' />
            <p><strong>Genre: </strong>{movieDetails.Genre}</p>
            <p><strong>Plot: </strong>{movieDetails.Plot}</p>
            <p><strong>Actors: </strong>{movieDetails.Actors}</p>
            <p><strong>IMDB Rating: </strong>{movieDetails.imdbRating}</p>
        </div>
    )
}