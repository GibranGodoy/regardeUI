import React from 'react'
import Carousel from 'react-material-ui-carousel';
import Card from './Card';
import "./CarouselTemplate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const CarouselTemplte = ({bd}) => {

  const sliderItems = bd.length > 5 ? 5 : bd.length;
  const items = [];

  for (let i = 0; i < bd.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <div className='carousel-container'>
        {bd.slice(i, i + sliderItems).map((object,index)=>{
          return <Card key={index} className="card" {...object} item={index} />
        })};
        </div>
      )

    return (
      
        <Carousel 
        NextIcon={<FontAwesomeIcon  icon={faChevronCircleRight}/>}
        PrevIcon={<FontAwesomeIcon icon={faChevronCircleLeft}/>}
        slide={true}
        index={5}
        animation={"slide"}
        timeout ={300}
        infiniteLoop={true}
        >
          {items}
        </Carousel>
        
      )
    }
  }
}


export default CarouselTemplte;
