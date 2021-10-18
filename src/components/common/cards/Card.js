import React from "react";
import "../../../css/Carousel&Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({title, poster, rate}) => {
    return (
        <div 
        className="card-container" >
        <div className="card-img">
          <img src={poster} alt="{alt}" />
        </div>
        <div className="card-text">
          <p>{title}</p>
          <div className="rate">
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
}

export default Card;
