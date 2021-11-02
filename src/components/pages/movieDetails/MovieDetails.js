import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import "./movieDetails.scss";
import MovieHeader from "./movieHeader/MovieHeader";
import Description from "./description/Description";
import Directors from "./directors/Directors";
import Trailer from "./trailer/Trailer";
import Cast from "./cast/Cast";

const MovieDetails = (props) => {
  const [movie, setMovie] = React.useState([]);
  const id = props.match.params.id;

  React.useEffect(() => {
    const url = "https://regardapi.herokuapp.com/v1/movies";
    const getMovie = async () => {
      try {
        const response = await fetch(`${url}/${id}`);
        const movie = await response.json();
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  return (
    <>
      <MovieHeader movie={movie} />
      <Description movieGenres={movie.genres} description={movie.description} />
      <Directors directors={movie.directors} />
      <Trailer trailer={movie.trailer} />
      <Cast cast={movie.cast}/>
      <Footer />
    </>
  );
};

export default withRouter(MovieDetails);
