import React from "react";
import "./cast.scss";

function Cast(props) {
  let allCast
  if (props.cast) {
    allCast = props.cast.map((cast, index) => (
      <li key={index} className="">
        {cast}
      </li>
    ));
  }

  return (
    <section className="cast">
      <h5>Reparto</h5>
      <ul className="body-1">{allCast}</ul>
    </section>
  );
}

export default Cast;
