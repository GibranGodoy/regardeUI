import React from "react";
import PropTypes from "prop-types";
import './SliderCard.scss'
import Modal from "../../../components/common/modal/Modal";
import '../../../components/common/modal/modal.scss'

const SliderCard = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="container">
    <div className="slider-card">
      <div className="slider-card-image">
        <img src={props.poster} alt="alt" onClick={openModal} />
      </div>
      <Modal
        className= "modal"
        showModal={showModal}
        setShowModal={setShowModal}
        key={props.index}
        id={props._id}
        poster={props.poster}
        title={props.title}
        year={props.year}
        directors={props.directors}
        cast={props.cast}
        genres={props.genres}
        rate={props.rate}
        description={props.description}
      />
    </div>
    </div>
  );
};

SliderCard.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default SliderCard;
