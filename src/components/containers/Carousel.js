import { React } from "react";
import "../../css/Carousel&Card.scss"
import { data } from "../../data";
import Card from "../common/cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  return (
    <section className="more-movies">
      <div className="information">
        <div className="info-title">
          <h5>Descubre más películas</h5>
        </div>
        <div className="more-info">
          <h6>
            <span className="underline">Populares</span> <span>Recientes</span>
          </h6>
        </div>
        <div className="search">
          <input
            className="iSearch"
            type="text"
            placeholder="Buscar..."
          ></input>
        </div>
      </div>

      <div className="allCards carousel-container">
        <FontAwesomeIcon className="leftBtn" icon={faChevronCircleLeft} />
        {data.map((movie, index) => {
          let position =
            index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
          return <Card key={index} className="card" {...movie} cardStyle={position} />;
        })}
        <FontAwesomeIcon className="rightBtn" icon={faChevronCircleRight} />
      </div>
    </section>
  );
};

export default Carousel;
