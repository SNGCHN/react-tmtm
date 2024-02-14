import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // 'Switch' 대신 'Routes' 사용
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList"
import TvList from "./pages/TvList";
import Chart from "./pages/Chart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<MovieList />} />
        <Route path="/tv" element={<TvList />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;