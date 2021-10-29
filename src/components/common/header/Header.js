import React from "react";
import "./header.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("Click on Inicio.");
}

export default function PageHeader() {
  return (
    <div className="root">
      <Toolbar className="toolbar">
        <Typography className="title" variant="h5">
          Regarde
        </Typography>
        <Link
          className="linkInicio"
          color="inherit"
          href="/"
          // onClick={handleClick}
        >
          Inicio
        </Link>

        <div className="buttons">
          <IconButton
            className="searchButton"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>

          <Button className="peliculas" color="inherit">
            <Link underline="none" href="/peliculas" color="inherit">
              Peliculas
            </Link>
          </Button>

          <Button className="registro" color="inherit">
            <Link underline="none" href="/signup" color="inherit">
              Registro
            </Link>
          </Button>
          <Button className="login" variant="contained" color="primary">
            <Link underline="none" href="/login" color="inherit">
              Iniciar Sesión
            </Link>
          </Button>
        </div>
      </Toolbar>
    </div>
  );
}
