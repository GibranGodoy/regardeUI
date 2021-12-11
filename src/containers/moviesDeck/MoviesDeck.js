import React from "react";
import "./moviesdeck.scss";
import Card from '../../components/common/card/Card';
import PropTypes from "prop-types";



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

MoviesDeck.propTypes ={
    favorites: PropTypes.array.isRequired,
    isFavorite: PropTypes.func.isRequired
}


export default MoviesDeck;
