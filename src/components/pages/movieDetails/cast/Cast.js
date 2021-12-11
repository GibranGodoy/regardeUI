import React from "react";
import "./cast.scss";
import PropTypes from "prop-types";

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

Cast.propTypes = {
  cast: PropTypes.array.isRequired
};

export default Cast;
