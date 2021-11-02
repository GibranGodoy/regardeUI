import React from "react";
import "./movieHeader.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const MovieHeader = (props) => {
  return (
    <div className="movieHeader">
      <img
        className="mainPoster"
        src={props.movie.poster}
        alt={props.movie.title}
      />
      <div className="movieHeaderPoster">
        <img
          className="headerBg"
          src={props.movie.poster}
          alt={props.movie.title}
        />
        <h3>{props.movie.title}</h3>
        <h5>{props.movie.year}</h5>
        <div className="favoritesAndRate">
          <div className="favorites">
            <p className="body-1">Agregar a favoritos</p>

            <span>
              <FavoriteBorderIcon />
            </span>
          </div>
          <div className="rate">
            <span>
              <StarIcon fontSize="large" className="star"/>
            </span>
            <h4>{props.movie.rate}</h4>
          </div>
        </div>
      </div>
      <div className="movieHeaderInfo"></div>
    </div>
  );
};

export default MovieHeader;
