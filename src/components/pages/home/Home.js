import Banner from "../../common/banner/Banner";
import MoviesList from "../../common/moviesList/MoviesList";
import Favorites from "../../common/favorites/Favorites";
import ReviewList from "../../common/reviews/ReviewList";
import Footer from "../../common/footer/Footer";
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import swal from "sweetalert";
import './home.scss'

const Home = (props) => {
  let history = useHistory();
  const isFavorite = (movieId) => {
    if (props.user) {
      if (props.favorites.find((fav) => fav._id === movieId)) {
        props.removeFavorites(movieId);
      } else {
        props.addFavorites(movieId);
      }
    } else {
      swal({
        text: "Debes iniciar sesión para agregar a favoritos",
        className: "body-1",
        buttons: {
          cancel: {
            text: "Cancelar",
            value: null,
            visible: true,
            closeModal: true,
          },
          text: "Iniciar sesión",
        },
      }).then((value) => {
        console.log(value);
        if (value) {
          history.push("/login");
        }
      });
    }
  };

  return (
    <>
      <Banner />
      <MoviesList
        movies={props.movies}
        favorites={props.favorites}
        isFavorite={isFavorite}
      />
      <Favorites
        user={props.user}
        favorites={props.favorites}
        movies={props.movies}
        isFavorite={isFavorite}
      />
      <ReviewList />
      <Footer />
    </>
  );
};

export default withRouter(Home);
