import "../css/App.css";
import React from "react";
import PageHeader from "./common/header/Header";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/Styles";
import theme from "../css/ThemeConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./common/404/NotFound";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import MovieDetails from "./pages/movieDetails/MovieDetails";

function App() {
  const [user, setUser] = React.useState(null);
  const [movies, setMovies] = React.useState([]);

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

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppBar position="fixed">
          <PageHeader user={user} />
        </AppBar>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home user={user} movies={movies} />
            </Route>
            <Route exact path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/logout">
              <Logout user={user} />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails user={user} />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
