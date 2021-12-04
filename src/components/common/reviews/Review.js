import React from "react";
import "./review.scss";
import Rating from "@mui/material/Rating";
import { Avatar } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";

export default function Review(props) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

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

  return (
    <div className="review">
      <Avatar
        {...stringAvatar(
          `${props.review.user.name} ${props.review.user.lastname}`
        )}
        className="avatar"
      />

      <div>
        <header className ="stars-movies">
          <h6>{props.review.movie.title}</h6>
          <StyledRating
            name="customized-color"
            value={props.review.rate}
            precision={0.5}
            readOnly
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarIcon fontSize="inherit" />}
            className="rating"
          />
        </header>
        <p className="caption">
          {props.review.user.username} - {props.review.createdAt.split("T")[0]}
        </p>
        <p className="body-1">{props.review.text}</p>
      </div>
    </div>
  );
}
