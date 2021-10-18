import { React } from "react";
import "./common/cards/Card.scss";
import { data } from "../data";
import Card from "./common/cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  return (
    <section class="more-movies">
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

      <div className="allCards">
        <FontAwesomeIcon className="leftBtn" icon={faChevronLeft} />
        {data.map((movie, index) => {
          let position =
            index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
          return <Card className="card" {...movie} cardStyle={position} />;
        })}
        <FontAwesomeIcon className="rightBtn" icon={faChevronRight} />
      </div>
    </section>
  );
};

export default Carousel;
