import React from "react";
import Section from "../section/Section";
import Card from "../../../containers/carousel/Card.js";
import "./movieslist.scss";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

function moviesList(props) {
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [popularMovies, setPopularMovies] = React.useState([]);

    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // React.useEffect(() => {
    //   const URL = "https://regardapi.herokuapp.com/v1/movies/top5";
    //   const getPopularMovies = async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     setPopularMovies(data);
    //   };
    //   getPopularMovies();
    // }, []);

  return (
    <section className="moviesList">
      <div className="information">
        <Section title={"Descubre más peliculas"} />
        <div className="more-info">
          <h6>
          <div className="buttons">
           <Button className="popularMovies" color="inherit">
            <Link className ="Link" underline="none" href="/popular" color="inherit">
              Populares
            </Link>
            </Button>
            <Button className="recentsMovies" color="inherit">
            <Link className = "Link" underline="none" href="/recents" color="inherit">
              Recientes
            </Link>
            </Button>
            </div>
          </h6>
        </div>
      </div>
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
  );
}

export default moviesList;
