import Banner from "../../common/banner/Banner";
import MoviesList from "../../common/moviesList/MoviesList";
import ReviewList from "../../common/reviews/ReviewList";
import Footer from "../../common/footer/Footer";
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import swal from "sweetalert";
import './home.scss'
import MovieSlider from "../../../containers/movieSlider/slider/MovieSlider";
import Modal from '../../modal/Modal'

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
        if (value) {
          history.push("/login");
        }
      });
    }
  };
 
  
  return (
    <>
      <Banner />
      <MovieSlider/>
      <Modal />
      <MoviesList
        user={props.user}
        movies={props.movies}
        favorites={props.favorites}
        isFavorite={isFavorite}
      />
      <ReviewList />
      <Footer />
    </>
  );
};

export default withRouter(Home);
