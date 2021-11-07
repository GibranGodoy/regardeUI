import React from "react";
import Section from "../section/Section";
import Card from "../../../containers/carousel/Card.js";
import "./movieslist.scss";

function moviesList(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [popularMovies, setPopularMovies] = React.useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      const URL = "https://regardapi.herokuapp.com/v1/movies/top5";
      const getPopularMovies = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPopularMovies(data);
      };
      getPopularMovies();
    }, []);

  return (
    <section className="moviesList">
      <div className="information">
        <Section title={"Películas más populares"} />
        <div className="more-info">
          <h6>
            {/* <span className="popular underline" onClick={handleMovies}>
              Populares
            </span>{" "}
            <span className="recent" onClick={handleMovies}>
              Recientes
            </span> */}
          </h6>
        </div>
      </div>
      <div className="movies-deck">
        {/* {props.movies.map((movie, index) => { */}
        {popularMovies.map((movie, index) => {
          let position =
            index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
          return (
            <Card
              className="Card"
              {...movie}
              key={index}
              id={movie._id}
              cardStyle={position}
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
