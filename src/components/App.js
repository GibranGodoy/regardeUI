import "../css/App.css";
import React from "react";
import PageHeader from "./common/header/Header";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../css/ThemeConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./common/404/NotFound";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Movies from "./pages/movies/Movies";
import MoviesTop from "./pages/moviesPopulares/MoviesTop";
import MoviesRecents from "./pages/moviesRecents/MoviesRecents";
import AllMovies from "./pages/allMovies/AllMovies";


function App() {
  const [user, setUser] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies";
    const getMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data);
    };
    getMovies();
  }, []);



  React.useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedUser");
    if (loggedUserJson) {
      const loggedUser = JSON.parse(loggedUserJson);
      setUser(loggedUser);
    }
  }, []);

  React.useEffect(() => {
    const url = "https://regardapi.herokuapp.com/v1/user";

    const getFavorites = async () => {
      try {
        const user = JSON.parse(window.localStorage.getItem("loggedUser"));
        const id = user.id;
        const response = await fetch(`${url}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        setFavorites(data.favorites);
      } catch (error) {}
    };
    getFavorites();
  }, [favorites, user]);

  const addFavorites = async (movieId) => {
    const url = "https://regardapi.herokuapp.com/v1/user/add-to-favorites";
    const id = user.id;
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        movie: movieId,
      }),
    });
  };

  const removeFavorites = async (movieId) => {
    const url = "https://regardapi.herokuapp.com/v1/user/remove-from-favorites";
    const id = user.id;
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        movie: movieId,
      }),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar position="fixed">
          <PageHeader user={user} />
        </AppBar>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                user={user}
                movies={movies}
                favorites={favorites}
                addFavorites={addFavorites}
                removeFavorites={removeFavorites}
              />
            </Route>
            <Route exact path="/movies">
              <AllMovies
                user={user}
                movies={movies}
                favorites={favorites}
                addFavorites={addFavorites}
                removeFavorites={removeFavorites}
              />
            </Route>
            <Route exact path="/signup">
              <Signup setUser={setUser} />
            </Route>
            <Route exact path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/logout">
              <Logout user={user} />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails
                user={user}
                favorites={favorites}
                addFavorites={addFavorites}
                removeFavorites={removeFavorites}
              />
            </Route>
            <Route exact path="/peliculas">
              <Movies user={user} movies={movies} />
            </Route>
             <Route path="/peliculasPopulares">
              <MoviesTop movies={movies} user={user}/>
            </Route>
             <Route path="/peliculasRecientes">
              <MoviesRecents movies={movies} user={user}/>
            </Route>

            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
