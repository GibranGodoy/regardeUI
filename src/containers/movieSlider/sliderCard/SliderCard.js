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
  const [showModal, setShowModal] = React.useState(false);

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
        showModal={showModal}
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
  poster: PropTypes.string.isRequired,
};

export default SliderCard;
