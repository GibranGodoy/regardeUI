import React from "react";
import Section from "../common/section/Section";
import CarouselTemplte from "../../containers/carousel/CarouselTemplate";
import { data } from "../../data";
import "./FirstCarousel.scss";

const FirstCarousel = () => {
  return (
    <section className="discover">
      <div className="information">
        <Section title={"Descubre más películas"} />
        <div className="more-info">
          <h6>
            <span className="underline">Populares</span> <span>Recientes</span>
          </h6>
        </div>
      </div>

      <CarouselTemplte bd={data} className="carousel"></CarouselTemplte>
    </section>
  );
};

export default FirstCarousel;
