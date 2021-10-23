import React from "react";
import CarouselTemplte from "../../containers/carousel/CarouselTemplate";
import { data } from "../../data";
import "./FirstCarousel.scss";

const FirstCarousel = () => {
  return (
    <>
   
      {/* <div className="information">
        <Section title={"Descubre más películas"} />
        <div className="more-info">
          <h6>
            <span className="underline">Populares</span> <span>Recientes</span>
          </h6>
        </div>
      </div> */}

      <CarouselTemplte bd={data} className="carousel"></CarouselTemplte>

    </>
  );
};

export default FirstCarousel;
