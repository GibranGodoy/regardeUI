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
  const [randomMovies, setRandomMovies] = React.useState([]);
  const [movie, setValue] = React.useState("");

  let content;
  let text;

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

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/randomMovies";
    const getRandomMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setRandomMovies(data);
    };
    getRandomMovies();
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
    text = "Peliculas Populares";
    content = (
      <MoviesDeck
        user={props.user}
        movies={popularMovies}
        favorites={props.favorites}
        isFavorite={props.isFavorite}
      />
    );
  } else if (movie === "recents") {
    text = "Peliculas Recientes";
    content = (
      <MoviesDeck
        user={props.user}
        movies={recentsMovies}
        favorites={props.favorites}
        isFavorite={props.isFavorite}
      />
    );
  } else if (movie === "favorites") {
    text = "Tu lista de favoritos";
    content = (
      <Favorites
        user={props.user}
        favorites={props.favorites}
        movies={props.movies}
        isFavorite={props.isFavorite}
      />
    );
  } else {
    text = "Descubre más peliculas";
    content = (
      <MoviesDeck
        movies={randomMovies}
        favorites={props.favorites}
        user={props.user}
        isFavorite={props.isFavorite}
      />
    );
  }

  return (
    <section className="moviesList">
      <div className="information">
        <Section title={text} />
        <div className="more-info">
          <h6>
          <div className="buttons btn-movies">
           <Button onClick={handlePopularClick} className="popularMovies" color="inherit">
             Populares
            </Button>
            <Button onClick={handleRecientesClick} className="recentsMovies" color="inherit">
            Recientes
            </Button>
            <Button onClick={handleFavoritosClick} className="favoritesMovies" color="inherit">
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
