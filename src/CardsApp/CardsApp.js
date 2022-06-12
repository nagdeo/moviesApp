import React, { useEffect, useState } from "react";
import "./CardsApp.css";
import axios from "axios";
import MovieDetail from "./MovieDetail/MovieDetail";

const CardsApp = (props) => {
  const [movies, setMovies] = useState({});
  const [moviesCopy, setMoviesCopy] = useState({});
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=40d345b2292914353a9459f055460816&page=1"
      )
      .then((response) => {
        setMovies(response.data.results);
        setMoviesCopy(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const fnSeeMovieDetail = (movie) => {
    console.log(movie);
    setMovie(movie);
  };
  const searchMovie = (e) => {
      
    let values = moviesCopy?.filter((item) =>
       item?.original_title
        ?.toLowerCase()
        ?.match(new RegExp(e.target.value?.toLowerCase(), "g"))
    );
    console.log(values);
   
        setMovies(values);
    
    
  };
  return (
    <div>
      {Object.keys(movie)?.length > 0 ? (
        <MovieDetail movie={movie} goBackToMovies={() => setMovie({})} />
      ) : (
        <div>
          <input
            onChange={(e) => searchMovie(e)}
            className="search-movie"
            type="text"
            placeholder="Search Movies"
            name="search"
          ></input>
          <div className="movies-main">
            {Object.keys(movies)?.length > 0 &&
              movies?.map((item, i) => (
                <div
                  className="movie"
                  onClick={() => fnSeeMovieDetail(item)}
                  key={i.toString()}
                >
                  <img
                    className="movie-img"
                    src={"http://image.tmdb.org/t/p/w500" + item?.backdrop_path}
                  />
                  <p className="movie-name">{item?.original_title}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CardsApp;
