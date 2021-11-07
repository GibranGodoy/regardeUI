import Footer from "../../common/footer/Footer";
import Favorites from "../../common/favorites/Favorites";
import { withRouter } from "react-router-dom";

const AllMovies = (props) => {
  return (
    <>
      <AllMovies movies={props.movies} />
       <Favorites user={props.user} />
      <Footer />
    </>
  );
};

export default withRouter(AllMovies);