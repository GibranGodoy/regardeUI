
import "../css/App.css";
import Footer from "./common/footer/Footer";
import PageHeader from "./common/header/Header";
import Banner from "./common/banner/Banner";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/Styles";
import theme from "../css/ThemeConfig";
import Carousel from "./containers/Carousel";
import ReviewList from "./common/reviews/ReviewList";
import Favorites from "./common/favorites/Favorites";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar position="fixed">
          <PageHeader />
        </AppBar>
        <Banner />
        <Carousel />
        <Favorites />
        <ReviewList />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

