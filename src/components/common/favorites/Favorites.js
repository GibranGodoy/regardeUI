import Button from "@material-ui/core/Button";
import React from "react";
import MoviesDeck from "../../../containers/moviesDeck/MoviesDeck"
import "./favorites.scss";
import PropTypes from "prop-types";

const Favorites = (props) => {
  let content;

  if (props.user) {
    content = (
      <MoviesDeck movies={props.favorites}
      favorites={props.favorites}
      isFavorite={props.isFavorite}></MoviesDeck>
    );
  } else {
    content = (
      <div className="loggedOut">
        <div>
          <h6>Parece que todavía no has iniciado sesión</h6>
          <p className="body-1">
            Crea tu cuenta para guardar las películas que quieres ver
          </p>
        </div>
        <div className="buttons">
          <Button
            className="signup"
            variant="outlined"
            color="secondary"
            href="/signup"
          >
            Crear cuenta
          </Button>
          <Button
            className="login"
            variant="contained"
            color="primary"
            href="/login"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="favorite-list">
      {/* <h5>Tu lista de favoritos</h5> */}
      {content}
    </section>
  );
};

Favorites.propTypes ={
  favorites: PropTypes.array.isRequired,
  isFavorite: PropTypes.func.isRequired
}

export default Favorites;
