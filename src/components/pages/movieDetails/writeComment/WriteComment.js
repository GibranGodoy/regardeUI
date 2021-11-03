import React from "react";
import "./writeComment.scss";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";

const WriteComment = (props) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#e0b746",
    },
    "& .MuiRating-iconHover": {
      color: "#dfa000",
    },
    "& .MuiRating-iconEmpty": {
      color: "#8ca8ae",
    },
  });

  const [commentRate, setCommentRate] = React.useState(5);
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postComment(value, commentRate, props.movieId);
    setValue("");
  };

  let content;

  if (props.user) {
    content = (
      <div className="commentSection">
        <form className="commentForm" onSubmit={handleSubmit}>
          <div className="rate">
            <p className="body-1">Califica la película</p>
            <StyledRating
              name="customized-color"
              value={commentRate}
              precision={0.5}
              onChange={(event, newValue) => {
                if (newValue >= 0.5) {
                  setCommentRate(newValue);
                }
              }}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarIcon fontSize="inherit" />}
              className="rating"
            />
          </div>
          <TextField
            id="filled-textarea"
            label="Tu comentario..."
            multiline
            variant="filled"
            className="commentInput"
            onChange={handleChange}
            value={value}
          />
          <Button
            variant="contained"
            color="primary"
            className="commentButton"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </div>
    );
  } else {
    content = (
      <div className="loggedOut">
        <div>
          <h6>No has iniciado sesión</h6>
          <p className="body-1">
            Crea tu cuenta o inicia sesión para comenzar a escribir un
            comentario
          </p>
        </div>
        <div className="buttons">
          <Button className="signup" variant="outlined" color="secondary" href='/signup'>
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

  return (
    <section className="writeComment">
      <h5>Comenta la película</h5>
      {content}
    </section>
  );
};

export default WriteComment;
