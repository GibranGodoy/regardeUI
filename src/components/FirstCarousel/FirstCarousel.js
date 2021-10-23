import React from "react";
import CarouselTemplate from "../../containers/carousel/CarouselTemplate";
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

      <CarouselTemplate bd={data} className="carousel"></CarouselTemplate>

    </>
  );
};

export default FirstCarousel;
