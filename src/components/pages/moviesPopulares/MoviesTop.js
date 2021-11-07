import React from "react";
import Banner from "../../common/banner/Banner";
import MoviesTop5 from "../../common/moviesTop5/MoviesTop5";
import Footer from "../../common/footer/Footer";
import { withRouter } from "react-router-dom";

const MoviesTop = (props) => {
  const [movie, setMovie] = React.useState([]);
  const id = props.match.params.id;

  React.useEffect(() => {
    const url = "https://regardapi.herokuapp.com/v1/movies/top5";
    const getMovie = async () => {
      try {
        const response = await fetch(`${url}`);
        const movie = await response.json();
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);


  return (
    <>
      <Banner />
      <MoviesTop5 movie={movie} />
      <Footer />
    </>
  );
};

export default withRouter(MoviesTop);
