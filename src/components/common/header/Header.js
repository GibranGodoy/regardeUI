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
        <Link underline="none" className="linkInicio" color="inherit" href="/">
          <Typography className="title" variant="h5">
            Regarde
          </Typography>
        </Link>
        <div className="buttons">
          {/* <IconButton
            className="searchButton"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton> */}

          <Link underline="none" href="/movies" color="inherit">
            <Button className="peliculas" color="inherit">
              Peliculas
            </Button>
          </Link>

          <Link underline="none" href="/signup" color="inherit">
            <Button className="registro" color="inherit">
              Registro
            </Button>
          </Link>
          <Link underline="none" href="/login" color="inherit">
            <Button className="login" variant="contained" color="primary">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </Toolbar>
    );
  } else {
    content = (
      <Toolbar className="toolbar">
        <Link underline="none" className="linkInicio" color="inherit" href="/">
          <Typography className="title" variant="h5">
            Regarde
          </Typography>
        </Link>
        <div className="buttons">
          {/* <IconButton
            className="searchButton"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton> */}

          <Link underline="none" href="/movies" color="inherit">
            <Button className="peliculas" color="inherit">
              Peliculas
            </Button>
          </Link>

          <Typography className="user" variant="h6">
            ¡Hola, {props.user.username}!
          </Typography>

          <Link underline="none" href="/logout" color="inherit">
            <Button className="login" variant="contained" color="primary">
              Cerrar Sesión
            </Button>
          </Link>
        </div>
      </Toolbar>
    );
  }

  return <div className="root">{content}</div>;

}
