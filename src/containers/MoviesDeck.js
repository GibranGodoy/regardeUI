import React from "react";
import "./moviesdeck.scss";
import Card from '../containers/carousel/Card';



const MoviesDeck = (props) => {
    return(
   <section className="moviesList">
        <div className="movies-deck">
        {props.movies.map((movie, index) => {
        return (
            <Card
            className="Card"
            {...movie}
            key={index}
            id={movie._id}
            favorites={props.favorites}
            isFavorite={props.isFavorite}
            />
        );
        })}
        </div>
    </section>
    )
}


export default MoviesDeck;
