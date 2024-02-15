import React, { useState, useEffect } from "react";
import axios from "axios";
import './MovieList.css';
import MovieListItem from "../../components/movie/MovieListItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setMovies(response.data.results);
      } catch (err) {
        setError('데이터를 불러오는 데 실패했습니다.');
        console.error(err); 
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieListItem/>
      ))}
    </div>
  );
};

export default MovieList;
