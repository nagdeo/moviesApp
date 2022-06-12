import React, { useEffect, useState } from "react";
import "./MovieDetail.css";

const MovieDetail = (props) => {
  return (
    <div className="pos-rel">
      <img
        className="poster-img"
        src={"http://image.tmdb.org/t/p/w500" + props?.movie?.poster_path}
      />
      <div className="pos-abs">
        <div className="back-btn" onClick={()=>props?.goBackToMovies()}> &lt; Back</div>
      
        <div className="movie-detail">
          <img
            className="movie-detail-img"
            src={"http://image.tmdb.org/t/p/w500" + props?.movie?.backdrop_path}
          />
          <div className="movie-name-des">
            <p className="m-name">{props?.movie?.original_title}</p>
            <p className="m-des">{props?.movie?.overview}</p>
            <p className="m-release-date">
              Release Date: {props?.movie?.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
