import React from 'react'
import Slider from "react-slick";
import './MultiItemSlider.scss';

const MultiItemSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
    }
    return (
        <div className='slider-container'>
        <Slider {...settings}>
          <div className='slider-card-container'>
            <img src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UY711_.jpg" alt="" />
          </div>
          <div className='slider-card-container'>
            <h3>2</h3>
          </div>
          <div className='slider-card-container'>
            <h3>3</h3>
          </div>
          <div className='slider-card-container'>
            <h3>4</h3>
          </div>
          <div className='slider-card-container'>
            <h3>5</h3>
          </div>
          <div className='slider-card-container'>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
}

export default MultiItemSlider
