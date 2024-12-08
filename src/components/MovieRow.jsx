import React from 'react';
import './MovieRow.css';

const MovieRow = ({ title, movies }) => {
    return (
        <div className="movie-row">
            <h2 className="row-title">{title}</h2>
            <div className="movie-container">
                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h5 className="movie-title">{movie.title}</h5>
                                <p className="movie-rating">⭐ {movie.rating} / 10</p>
                                <button className="watch-btn">Watch Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieRow;
