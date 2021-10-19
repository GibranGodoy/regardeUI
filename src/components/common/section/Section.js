import React from 'react';
import './Section.scss';

const Section = ({title}) => {
    return (
        <section className='section-tittle'>
            <div className="title-container">
            <h5 className='title'>{title}</h5>
            </div>
        </section>
    )
}

export default Section;
