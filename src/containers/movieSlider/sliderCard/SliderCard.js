import React from "react";
import PropTypes from "prop-types";
import './SliderCard.scss'
import Modal from "../../../components/common/modal/Modal";
import '../../../components/common/modal/modal.scss'

const SliderCard = ({
  key,
  id,
  poster,
  title,
  year,
  directors,
  cast,
  genres,
  rate,
  description,
}) => {

  /* Show Modal Hook */
  const [showModal, setShowModal] = React.useState(false);
  /* Haldler for opening modal */
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="container">
    <div className="slider-card">
      <div className="slider-card-image">
        <img src={poster} alt="alt" onClick={openModal} />
      </div>
      <Modal
        className= "modal-controler"
        showmodal={showModal}
        setShowModal={setShowModal}
        key={key}
        id={id}
        poster={poster}
        title={title}
        year={year}
        directors={directors}
        cast={cast}
        genres={genres}
        rate={rate}
        description={description}
      />
    </div>
    </div>
  );
};

SliderCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  directors: PropTypes.array.isRequired,
  cast: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  rate: PropTypes.number.isRequired,
};

export default SliderCard;
