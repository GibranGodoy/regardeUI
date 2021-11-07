import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
            {/* <FavoriteBorderIcon className="heartIcon" /> */}
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
