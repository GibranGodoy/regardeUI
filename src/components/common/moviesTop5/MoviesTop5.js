import React from "react";
import Section from "../section/Section";
import Card from "../../../containers/carousel/Card.js";
import "../moviesList/movieslist.scss";
import Link from "@material-ui/core/Link";

function MovieTop(props) {

   return (
    <section className="moviesList">
        <div className="information">
            <Section title={"Descubre más películas"} />
            <div className="more-info">
            <h6>
            <Link className ="Link" underline="none" href="/peliculasPopulares" color="inherit">
              Populares
            </Link>
            <Link className = "Link" underline="none" href="/peliculasRecientes" color="inherit">
              Recientes
            </Link>
            </h6>
            </div>
        </div>

        <div className="movies-deck">
            {props.movie.map((movie, index) => {
              console.log(props.movie)
            let position =  index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
            return <Card className="Card" {...movie} key={index} id={movie._id} cardStyle={position} />;
            })}
        
        </div>


    </section>
    );
      }


export default (MovieTop);

