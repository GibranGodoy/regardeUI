
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
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";



function App() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // React.useEffect(() => {
  //   const URL = "http://localhost:4001/v1/";
  // }, []);

  const [user, setUser] = React.useState(null);

  async function login(email, password) {
    const response = await fetch(`http://localhost:4001/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (data.success) {
      setUser(data.user);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar position="fixed">
          <PageHeader />
        </AppBar>
        <Banner />
        {/* <FirstCarousel /> */}
        <MoviesList />
        <Favorites />
        <ReviewList />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

