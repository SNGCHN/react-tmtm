import React from 'react';

const MovieListItem = (movie) => {
    return (
        <div className="movie-item" key={movie.id}>
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        </div>
    );
};

export default MovieListItem;