import Card from "../../../containers/carousel/Card";
import Footer from "../../common/footer/Footer";
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import swal from "sweetalert";
import "./allMovies.scss";

const AllMovies = (props) => {
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
      <section className="moviesListPage">
        <div className="information">
          <h3>Todas las películas</h3>
        </div>
        <div className="movies-deck">
          {props.movies.map((movie, index) => {
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
                isFavorite={isFavorite}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(AllMovies);
