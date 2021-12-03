import React from "react";
import Section from "../section/Section";
import MoviesDeck from "../../../containers/MoviesDeck.js";
import Favorites from "../favorites/Favorites.js";
import "./movieslist.scss";
import Button from "@material-ui/core/Button";

const MoviesList = (props) => {
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [recentsMovies, setRecentsMovies] = React.useState([]);
  const [movie, setValue] = React.useState("");

  let content;

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

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/recents";
    const getMovie = async () => {
      try {
        const response = await fetch(`${URL}`);
        const movie = await response.json();
        setRecentsMovies(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  const handlePopularClick = () => {
    setValue("popular");
  };

  const handleRecientesClick = () => {
    setValue("recents");
  };

  const handleFavoritosClick = () => {
    setValue("favorites");
  };

  if (movie === "popular") {
    content = (
      <MoviesDeck
        user={props.user}
        movies={popularMovies}
        favorites={props.favorites}
        isFavorite={props.isFavorite}
      />
    );
  } else if (movie === "recents") {
    content = (
      <MoviesDeck
        user={props.user}
        movies={recentsMovies}
        favorites={props.favorites}
        isFavorite={props.isFavorite}
      />
    );
  } else if (movie === "favorites") {
    content = (
      <Favorites
        user={props.user}
        favorites={props.favorites}
        movies={props.movies}
        isFavorite={props.isFavorite}
      />
    );
  } else {
    content = (
      <MoviesDeck
        movies={props.movies}
        favorites={props.favorites}
        user={props.user}
        isFavorite={props.isFavorite}
      />
    );
  }

  return (
    <section className="moviesList">
      <div className="information">
        <Section title={"Descubre más peliculas"} />
        <div className="more-info">
          <h6>
            <div className="buttons">
              <Button
                onClick={handlePopularClick}
                className="popularMovies"
                color="inherit"
              >
                Populares
              </Button>
              <Button
                onClick={handleRecientesClick}
                className="recentsMovies"
                color="inherit"
              >
                Recientes
              </Button>
              <Button
                onClick={handleFavoritosClick}
                className="favoritesMovies"
                color="inherit"
              >
                Favoritos
              </Button>
            </div>
          </h6>
        </div>
      </div>

      {content}
    </section>
  );
};

export default MoviesList;
