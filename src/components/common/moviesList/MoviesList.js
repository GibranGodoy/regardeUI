import React from "react";
import Section from "../section/Section";
import Card from "../../../containers/carousel/Card.js";
import "./movieslist.scss";


function moviesList(props) {
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [movies, setMovies] = React.useState([]);

    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // React.useEffect(() => {
    //     const URL = "https://regardapi.herokuapp.com/v1/movies";
    //     const getMovies = async () => {
    //         const response = await fetch(URL);
    //         const data = await response.json();
    //         setMovies(data);
    //     }
    //     getMovies();
    // }, [])

    return (
    <section className="moviesList">
        <div className="information">
            <Section title={"Descubre más películas"} />
            <div className="more-info">
            <h6>
                <span className="underline">Populares</span> <span>Recientes</span>
            </h6>
            </div>
        </div>

        <div className="movies-deck">
            {props.movies.map((movie, index) => {
            let position =  index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
            return <Card className="Card" {...movie} key={index} id={movie._id} cardStyle={position} />;
            })}
        
        </div>
    </section>
    );
}

export default moviesList;


