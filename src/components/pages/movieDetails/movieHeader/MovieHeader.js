import React from "react";
import "./movieHeader.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import PropTypes from "prop-types";

const MovieHeader = (props) => {
    const handleFavorites = () => {
      props.isFavorite(props.movie._id);
    };
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
          <div className="favorites" onClick={handleFavorites}>
            {props.movieSaved ? (
              <>
                <p className="body-1">Quitar de favoritos</p>
                <span>
                  <FavoriteIcon className="filledHeart"/>
                </span>
              </>
            ) : (
              <>
                <p className="body-1">Agregar a favoritos</p>
                <span>
                  <FavoriteBorderIcon />
                </span>
              </>
            )}
          </div>
          <div className="rate">
            <span>
              <StarIcon fontSize="large" className="star" />
            </span>
            <h4>{props.movie.rate}</h4>
          </div>
        </div>
      </div>
      <div className="movieHeaderInfo"></div>
    </div>
  );
};

MovieHeader.propTypes ={
  movie: PropTypes.object.isRequired
}
export default MovieHeader;
