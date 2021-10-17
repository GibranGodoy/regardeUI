import React, { useState } from "react";
import imgproof from '../../../css/assets/img/imgproof.jpg'
import './Card.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faHeart, faSearch} from '@fortawesome/free-solid-svg-icons'

class Card extends React.Component{
    render(){

        return(
            <section class="more-movies">
                <div className="information">
                    <div className="info-title">
                        <h5>Descubre más películas</h5>
                    </div>
                    <div className="more-info">
                        <h6><span className="underline">Populares</span> <span>Recientes</span></h6>
                    </div>
                    <div className="search">
                    <input className="iSearch" type="text" placeholder="Buscar..."></input>
                    </div>
                </div>
                
            
                <div className="allCards">
                    <div className="card-container">
                        <div className="card-img">
                            <img src={imgproof}/>
                        </div>
                        <div className="card-text">
                            <p>Sen to Chihiro no Kamikakushi</p>
                            <div className="rate">
                                <div className="star">
                                    <p><span><FontAwesomeIcon icon ={faStar}/></span>8.7</p>
                                </div>
                                <div className='heart'>
                                    <FontAwesomeIcon icon ={faHeart}/>
                                </div>
                            </div>   
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card-img">
                            <img src={imgproof}/>
                        </div>
                        <div className="card-text">
                            <p>Sen to Chihiro no Kamikakushi</p>
                            <div className="rate">
                                <div className="star">
                                    <p><span><FontAwesomeIcon icon ={faStar}/></span>8.7</p>
                                </div>
                                <div className='heart'>
                                    <FontAwesomeIcon icon ={faHeart}/>
                                </div>
                            </div>   
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card-img">
                            <img src={imgproof}/>
                        </div>
                        <div className="card-text">
                            <p>Sen to Chihiro no Kamikakushi</p>
                            <div className="rate">
                                <div className="star">
                                    <p><span><FontAwesomeIcon icon ={faStar}/></span>8.7</p>
                                </div>
                                <div className='heart'>
                                    <FontAwesomeIcon icon ={faHeart}/>
                                </div>
                            </div>   
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card-img">
                            <img src={imgproof}/>
                        </div>
                        <div className="card-text">
                            <p>Sen to Chihiro no Kamikakushi</p>
                            <div className="rate">
                                <div className="star">
                                    <p><span><FontAwesomeIcon icon ={faStar}/></span>8.7</p>
                                </div>
                                <div className='heart'>
                                    <FontAwesomeIcon icon ={faHeart}/>
                                </div>
                            </div>   
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card-img">
                            <img src={imgproof}/>
                        </div>
                        <div className="card-text">
                            <p>Sen to Chihiro no Kamikakushi</p>
                            <div className="rate">
                                <div className="star">
                                    <p><span><FontAwesomeIcon icon ={faStar}/></span>8.7</p>
                                </div>
                                <div className='heart'>
                                    <FontAwesomeIcon icon ={faHeart}/>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            
            </section>
            
        ) 
    }
}

export default Card