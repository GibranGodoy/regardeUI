
import "../css/App.css";
import React from 'react';
import Footer from "./common/footer/Footer";
import PageHeader from "./common/header/Header";
import Banner from "./common/banner/Banner";
import AppBar from "@material-ui/core/AppBar";
import FirstCarousel from "./FirstCarousel/FirstCarousel";
import { ThemeProvider } from "@material-ui/core/Styles";
import theme from "../css/ThemeConfig";
import ReviewList from "./common/reviews/ReviewList";
import Favorites from "./common/favorites/Favorites";
import MoviesList from "./common/moviesList/MoviesList";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar position="fixed">
          <PageHeader />
        </AppBar>
        <Banner />
        <FirstCarousel />
        <MoviesList />
        <Favorites />
        <ReviewList />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

