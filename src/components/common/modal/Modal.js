import React from "react";
import "./modal.scss";
import { useHistory } from "react-router-dom";

const Modal = ({
  showModal,
  setShowModal,
  poster,
  id,
  title,
  year,
  directors,
  cast,
  genres,
  rate,
  description,
}) => {
  /* //History Hook */
  const history = useHistory();

  /* //onClick Handler for image */
  const handleClick = () => {
    history.push(`/movie/${id}`);
  };

  /* //Logic for specific content in modal */
  let directorsSliced;
  let directorsGroup;
  if (directors) {
    directorsSliced = directors.slice(0, 2);
    directorsSliced.push("...");
    directorsGroup = directorsSliced.map((directors, index) => (
      <p key={index}>{directors}</p>
    ));
  }

  let castSliced;
  let castGroup;
  if (cast) {
    castSliced = cast.slice(0, 2);
    castSliced.push("...");
    castGroup = castSliced.map((cast, index) => <p key={index}>{cast}</p>);
  }

  let genresSliced;
  let genresGroup;
  if (genres) {
    genresSliced = genres.slice(0, 3);
    genresGroup = genresSliced.map((genres, index) => (
      <p key={index}>{genres}</p>
    ));
  }

  function shorten(text, max) {
    return text && description.length > max
      ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
      : `${text}...`;
  }

  let descriptionSliced;
  if (description) {
    descriptionSliced = shorten(description, 150);
  }
  /* --- */

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-wrapper">
          {/* <div className="modal-image">
                <img src={poster} alt="alt" />
              </div> */}
            <div className="modal-content">
              <span /* onClik={setShowModal((prev) => !prev)} */>Close</span>
              <h5>{title}</h5>
              <hr />
              <div className="content-info">
                <div className="pub-dir-rep">
                  <span className="elements-name">
                    Publicada
                    <p>{year}</p>
                  </span>
                  <span className="elements-name">
                    Director(es)
                    {directorsGroup}
                  </span>
                  <span className="elements-name">
                    Reparto
                    {castGroup}
                  </span>
                </div>
                <div className="gen-sin">
                  <span className="elements-name">
                    Géneros
                    {genresGroup}
                  </span>
                  <span className="elements-name">
                    Sinópsis
                    <p>{descriptionSliced}</p>
                  </span>
                </div>
              </div>
              <button className="show-more" onClick={handleClick}>
                Ver más
              </button>
              <hr />
              <span className="calification">Calificación</span>
              <span className="calification-number">{rate}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
