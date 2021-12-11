import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ title, poster, rate, id, isFavorite, favorites }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/movie/${id}`);
  };

  const handleFavorites = () => {
    isFavorite(id);
  };

  let movieSaved;
  if (favorites) {
    movieSaved = favorites.find((movie) => movie._id === id);
  }

  return (
    <div className="card-container">
      <div className="card-img">
        <span onClick={handleClick}>
          <img src={poster} alt="{alt}" />
        </span>
      </div>
      <div className="card-text">
        <p>{title}</p>
        <div className="rated">
          <div className="star">
            <p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              {rate}
            </p>
          </div>
          <div
            className={`heart ${movieSaved ? "saved" : ""}`}
            onClick={handleFavorites}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes ={
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  favorites: PropTypes.array.isRequired,
  isFavorite: PropTypes.func.isRequired
}

export default Card;
