import React from "react";
import "./writeComment.scss";
import Button from "@material-ui/core/Button";

const WriteComment = (props) => {
    let content;
    const user = window.localStorage.getItem("loggedUser");
    if (props.user) {
      content = (
        <div>
          {/* {favorites.map((favorite, index) => {
            return <Card key={index} {...favorite} />;
          })} */}
              Hola
        </div>
      );
    } else {
      content = (
        <div className="loggedOut">
          <div>
            <h6>No has iniciado sesión</h6>
            <p className="body-1">
              Crea tu cuenta o inicia sesión para comenzar a escribir un comentario
            </p>
          </div>
          <div className="buttons">
            <Button className="signup" variant="outlined" color="secondary">
              Crear cuenta
            </Button>
            <Button
              className="login"
              variant="contained"
              color="primary"
              href="/login"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      );
    }
    console.log(user);
  return (
    <section className="writeComment">
          <h5>Escribe un comentario</h5>
          {content}
    </section>
  );
};

export default WriteComment;
