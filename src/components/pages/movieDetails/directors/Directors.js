import React from "react";
import "./directors.scss";
import PropTypes from "prop-types";

function Directors(props) {
  let allDirectors;
  let numDirectors;
  if (props.directors) {
    numDirectors = props.directors.length;
    allDirectors = props.directors.map((director, index) => (
      <li key={index} className="">
        {director}
      </li>
    ));
    }
    

  return (
    <section className="directors">
      {numDirectors === 1 ? <h5>Director</h5> : <h5>Directors</h5>}
      <ul className="body-1">{allDirectors}</ul>
    </section>
  );
}

Directors.propTypes = {
  directors: PropTypes.array.isRequired
};
export default Directors;
