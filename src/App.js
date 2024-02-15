import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./pages/moviepage/MovieList";
import TvList from "./pages/tvpage/TvList";
import Chart from "./pages/chartpage/ChartPage";

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