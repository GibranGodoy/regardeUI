import React from "react";
import "./description.scss";

function Description(props) {
    let allGenres
    if (props.movieGenres) {
        allGenres = props.movieGenres.map((genre, index) => 
            
                <li key={index} className='genreItem'>{genre}</li>
            
        );
    }

  return (
    <section className='descriptionAndGenres'>
      <div className="description">
        <h5>Description</h5>
        <p className="body-1">
          {props.description}
        </p>
      </div>
      <div className="genres">
        <h5>Genres</h5>
        <ul className='body-1'>{allGenres}</ul>
      </div>
    </section>
  );
}

export default Description;
// {props.genres.map((genre, index) => (
//             <li key={index}>{genre}</li>
//           ))}
