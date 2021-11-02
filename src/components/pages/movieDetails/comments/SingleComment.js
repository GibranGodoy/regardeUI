import React from "react";
import "./singleComment.scss";
import Rating from "@mui/material/Rating";
import { Avatar } from "@material-ui/core";

export default function SingleComment(props) {
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

  return (
    <div className="review">
      <Avatar
        {...stringAvatar(
          `${props.review.userId.name} ${props.review.userId.lastname}`
        )}
        className="avatar"
      />

      <div>
        <header>
          <h6>{props.review.userId.username}</h6>
          <Rating
            name="half-rating-read"
            value={props.review.rate}
            precision={0.5}
            readOnly
          />
        </header>
        <p className="caption">
          {props.review.createdAt.split("T")[0]}
        </p>
        <p className="body-1">{props.review.text}</p>
      </div>
    </div>
  );
}
