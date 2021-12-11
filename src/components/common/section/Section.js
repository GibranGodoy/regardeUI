import React from 'react';
import './Section.scss';
import PropTypes from "prop-types";

const Section = ({title}) => {
    return (
        <section className='section-tittle'>
            <div className="title-container">
            <h5 className='title'>{title}</h5>
            </div>
        </section>
    )
}
Section.propTypes ={
    title: PropTypes.string.isRequired
}

export default Section;
