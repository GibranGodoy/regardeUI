import React from 'react';
import Carousel from './Carousel'
import '../css/CarouselContainer.scss'

const CarouselContainer = ({title}) => {
    return (
        <div className="category">
            <div className="category_title">
                <h2>{title}</h2>
                <span className="top5">Populares</span>
                <span className="recents">Recientes</span>
            </div>  
            <Carousel></Carousel>
        </div>
    )
}

export default CarouselContainer


