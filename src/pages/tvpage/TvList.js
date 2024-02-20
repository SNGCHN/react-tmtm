import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TvList.css";

const TvList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?language=ko-KR&api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setTvShows(response.data.results);
      } catch (err) {
        setError('데이터를 불러오는 데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>로딩 중</div>;

  return (
    <div className="tv-list">
      {tvShows.map((tvShow) => (
        <div className="tv-item" key={tvShow.id}>
          <div className="tv-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} alt={tvShow.name} />
          </div>
          <div className="tv-info">
            <h3>{tvShow.name}</h3>
            <p>{tvShow.first_air_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TvList;