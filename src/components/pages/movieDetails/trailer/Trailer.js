import React from "react";
import "./trailer.scss";
import PropTypes from "prop-types";

function Trailer(props) {
  let trailer;
  if (props.trailer) {
    trailer = props.trailer;
  }

  return (
    <section className="trailer">
      <h5>Trailer</h5>
      <iframe
        height="512"
        src={trailer}
        title="Movie"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        className="trailerIframe"
      ></iframe>
    </section>
  );
}

Trailer.propTypes= {
  trailer: PropTypes.string.isRequired
}

export default Trailer;
