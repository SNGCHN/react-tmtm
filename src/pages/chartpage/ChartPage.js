import React, { useState, useEffect } from "react";
import axios from "axios";

const Chart = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [movieResponse, tvShowResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${process.env.REACT_APP_TMDB_API_KEY}`),
          axios.get(`https://api.themoviedb.org/3/tv/popular?language=ko-KR&api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        ]);
        setMovies(movieResponse.data.results);
        setTvShows(tvShowResponse.data.results);
      } catch (error) {
        setError("데이터를 불러오는 데 실패했습니다.");
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="chart">
      <div className="movie-chart">
        <h2>영화 차트</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={movie.id}>
              {index + 1}. {movie.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="tv-chart">
        <h2>TV 프로그램 차트</h2>
        <ul>
          {tvShows.map((tvShow, index) => (
            <li key={tvShow.id}>
              {index + 1}. {tvShow.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chart;