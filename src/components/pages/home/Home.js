import Banner from "../../common/banner/Banner";
import MoviesList from "../../common/moviesList/MoviesList";
import Favorites from "../../common/favorites/Favorites";
import ReviewList from "../../common/reviews/ReviewList";
import Footer from "../../common/footer/Footer";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <Banner />
      <MoviesList />
      <Favorites user={ props.user }/>
      <ReviewList />
      <Footer />
    </>
  );
};

export default withRouter(Home);
