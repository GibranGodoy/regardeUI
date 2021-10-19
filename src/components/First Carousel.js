import React from "react";
import Section from "../containers/carousel/Section";
import CarouselTemplte from "../containers/carousel/CarouselTemplate";
import { data } from "../data";
import './FirstCarousel.scss'

const FirstCarousel = () => {
  return (
    <div>
      <Section title={"Descubre más pelis"} />
      <div className="information">
          <div className="info-title">
            <h5>Descubre más películas</h5>
          </div>
          <div className="more-info">
            <h6>
              <span className="underline">Populares</span>{" "}
              <span>Recientes</span>
            </h6>
          </div>
        </div>
      <CarouselTemplte bd={data}></CarouselTemplte>
    </div>
  );
};

export default FirstCarousel;
