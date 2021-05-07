import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
// import requests from "./requests";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetcData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetcData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
