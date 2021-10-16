import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2f4858",
    color: "white",
    borderBottom: "1px solid",
    borderColor: "white",
  },
  title: {
    marginLeft: 40,
    flexGrow: 1,
    color: "#e0b746",
  },
  linkInicio: {
    fontFamily: "Lato",
    fontSize: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("Click on Inicio.");
}

export default function PageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5">
          Regarde
        </Typography>
        <Link
          className={classes.linkInicio}
          color="inherit"
          href="#"
          onClick={handleClick}
        >
          Inicio
        </Link>

        <IconButton aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton
          aria-label="display more actions"
          edge="end"
          color="inherit"
        ></IconButton>
        <Button color="inherit">Peliculas</Button>
        <Button color="inherit">Registro</Button>
        <Button variant="contained" color="primary">
          Iniciar Sesion
        </Button>
      </Toolbar>
    </div>
  );
}
