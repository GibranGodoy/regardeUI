import React from "react";
import './common/cards/Card.scss';
import { data } from "../data";
import Card from "./common/cards/Card";

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
      <div className="allCards">
          {data.map((movie, index)=>{
              return <Card key={index} {...movie}/>
          })}
          
      </div>
    </section>
  );
};

export default Carousel;
