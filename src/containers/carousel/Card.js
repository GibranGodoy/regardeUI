import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Card = ({ title, poster, rate, id }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/movie/${id}`);
  };
  
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
          <div className="heart">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
