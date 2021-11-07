import Banner from "../../common/banner/Banner";
import MoviesList from "../../common/moviesList/MoviesList";
import Favorites from "../../common/favorites/Favorites";
import ReviewList from "../../common/reviews/ReviewList";
import Footer from "../../common/footer/Footer";
import React from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {

  const isFavorite = (movieId) => {
    if (props.favorites.find(fav => fav._id === movieId)) {
      props.removeFavorites(movieId);
    }
    else {
      props.addFavorites(movieId);
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
