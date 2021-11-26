import React from "react";
import "./header.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function PageHeader(props) {
  let content;
  if (!props.user) {
    content = (
      <Toolbar className="toolbar">
        <Typography className="title" variant="h5">
          Regarde
        </Typography>
        <Button className="Inicio" color="inherit">
        <Link underline= "none" className="linkInicio" color="inherit" href="/">
          Inicio
        </Link>
        </Button>
        <div className="buttons">
          {/* <IconButton
            className="searchButton"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton> */}

          <Button className="peliculas" color="inherit">
            <Link underline="none" href="/movies" color="inherit">
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
    );
  } else {
    content = (
      <Toolbar className="toolbar">
        <Typography className="title" variant="h5">
          Regarde
        </Typography>
        <Link className="linkInicio" color="inherit" href="/">
          Inicio
        </Link>

        <div className="buttons">
          {/* <IconButton
            className="searchButton"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton> */}

          <Button className="peliculas" color="inherit">
            <Link underline="none" href="/movies" color="inherit">
              Peliculas
            </Link>
          </Button>

          <Button className="login" variant="contained" color="primary">
            <Link underline="none" href="/logout" color="inherit">
              Cerrar Sesión
            </Link>
          </Button>
        </div>
      </Toolbar>
    );
  }

  return <div className="root">{content}</div>;
}
