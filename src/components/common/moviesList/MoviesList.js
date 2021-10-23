import React from "react";
import Section from "../section/Section";
import { data } from "../../../data";
import Card from "../../../containers/carousel/Card.js";
// import "../../FirstCarousel/FirstCarousel.scss";
import "./movieslist.scss";


const moviesList = () => {
    return (
    <section className="moviesList">
        <div className="information">
            <Section title={"Descubre más películas"} />
            <div className="more-info">
            <h6>
                <span className="underline">Populares</span> <span>Recientes</span>
            </h6>
            </div>
        </div>

        <div className="movies-deck">
            {data.map((movie, index) => {
            let position =  index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
            return <Card className="Card" {...movie} key={index} cardStyle={position} />;
            })}
        
        </div>
    </section>
    );
}

export default moviesList;


