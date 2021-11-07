import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import "./movieDetails.scss";
import MovieHeader from "./movieHeader/MovieHeader";
import Description from "./description/Description";
import Directors from "./directors/Directors";
import Trailer from "./trailer/Trailer";
import Cast from "./cast/Cast";
import Comments from "./comments/Comments";
import WriteComment from "./writeComment/WriteComment";
import swal from "sweetalert";


const MovieDetails = (props) => {
  const [movie, setMovie] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
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

  React.useEffect(() => {
    if (movie._id) {
      const URL = `https://regardapi.herokuapp.com/v1/comments/ofmovie/${movie._id}`;
      const getComments = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setReviews(data);
      };
      getComments();
    }
  }, [movie._id]);

  let movieSaved;
  if (props.favorites) {
    movieSaved = props.favorites.find((fav) => fav._id === movie._id);
  }

  const postComment = async (value, commentRate, movieId) => {
    const response = await fetch(
      "https://regardapi.herokuapp.com/v1/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.user.token}`,
        },
        body: JSON.stringify({
          movieId: movieId,
          text: value,
          rate: commentRate,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      setReviews(reviews.concat([data]));
    } else {
      alert("No fue posible publicar tu comentario");
    }
  };




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
      <MovieHeader movie={movie} favorites={props.favorites} movieSaved={movieSaved} isFavorite={isFavorite} />
      <Description movieGenres={movie.genres} description={movie.description} />
      <Directors directors={movie.directors} />
      <Trailer trailer={movie.trailer} />
      <Cast cast={movie.cast} />
      <Comments reviews={reviews} />
      <WriteComment
        movieId={movie._id}
        user={props.user}
        setReviews={setReviews}
        postComment={postComment}
      />
      <Footer />
    </>
  );
};

export default withRouter(MovieDetails);
