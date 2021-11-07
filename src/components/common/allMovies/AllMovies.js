import React from "react";
import "./AllMovies.scss";
import Card from "../../../containers/carousel/Card.js";

        
function allMovies(props) {
    return (
    <section className="moviesAll">
        <div className="movies-Alldeck">
            {props.movies.map((movie, index) => {
                 let position =  index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
            return <Card className="Card" {...movie} key={index} id={movie._id} cardStyle={position} />;
            })}
        </div>
    </section>
    );
}

export default allMovies;
