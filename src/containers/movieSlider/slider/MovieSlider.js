import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Section from '../../../components/common/section/Section' 
import Slider from "react-slick";
import "./MovieSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../sliderCard/SliderCard";


/* MUI Select styles */
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
/* :::: */
export default function MovieSlider() {
  /* Hooks */
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  /* :::: */
  /* State de API */
  const [romanceMovies, setRomanceMovies] = React.useState([]);
  const [dramaMovies, setDramaMovies] = React.useState([]);
  const [scifiMovies, setSciFiMovies] = React.useState([]);
  const [adventureMovies, setAdventureMovies] = React.useState([]);
  const [comedyMovies, setComedyMovies] = React.useState([]);
  const [fantasyMovies, setFantasyMovies] = React.useState([]);
  const [actionMovies, setActionMovies] = React.useState([]);
  const [supernaturalMovies, setSupernaturalMovies] = React.useState([]);
  const [defaultMovies, setDefaultMovies] = React.useState([]);
  /* :::: */
 
  /* Select Handler */
  const handleChange = (event) => {
    setCategory(event.target.value);
    // console.log(setCategory);
    // console.log(category);
  };
  /* Slick-Slider Settings */
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  /* :::: */
  /* Calling API For Each Category */
  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Romance";
    const getRomanceMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setRomanceMovies(data);
    };
    getRomanceMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Drama";
    const getDramaMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setDramaMovies(data);
    };
    getDramaMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Sci-Fi";
    const getSciFiMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setSciFiMovies(data);
    };
    getSciFiMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Adventure";
    const getAdventureMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setAdventureMovies(data);
    };
    getAdventureMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Comedy";
    const getComedyMoies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setComedyMovies(data);
    };
    getComedyMoies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Fantasy";
    const getFantasyMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setFantasyMovies(data);
    };
    getFantasyMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Action";
    const getActionMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setActionMovies(data);
    };
    getActionMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/group/Supernatural";
    const getSupernaturalMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setSupernaturalMovies(data);
    };
    getSupernaturalMovies();
  }, []);

  React.useEffect(() => {
    const URL = "https://regardapi.herokuapp.com/v1/movies/top5";
    const getDefaultMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setDefaultMovies(data);
    };
    getDefaultMovies();
  }, []);
  /* :::: */
  /* Conditional Rendering */
  let content;

  switch (category) {
    case "romance":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {romanceMovies.map((movie, index) => {
              return (
                <div>
                   <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
                </div>   
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "drama":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {dramaMovies.map((movie, index) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "adventure":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {adventureMovies.map((movie, index) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "scifi":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {scifiMovies.map((movie, index, poster) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "comedy":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {comedyMovies.map((movie, index) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "fantasy":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {fantasyMovies.map((movie, index) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "action":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {actionMovies.map((movie, index) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
      break;
    case "supernatural":
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {supernaturalMovies.map((movie, index) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );

      break;
    default:
      content = (
        <div className="slider-container">
          <Slider {...settings}>
            {defaultMovies.map((movie, index,) => {
              return (
                <SliderCard 
                key ={index} 
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                directors={movie.directors}
                cast={movie.cast}
                genres={movie.genres}
                rate={movie.rate}
                description={movie.description}
                        />
              );
            })}
          </Slider>
        </div>
      );
  }
  /* :::: */
  /* Component rendering */
  return (
    <div>
      <div className="select-section">
        <Section title="Descubre por categoría" />
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            Categoria
          </InputLabel>
          <Select
            className="myselect"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>--Selecciona</em>
            </MenuItem>
            <MenuItem value={"romance"}>Romance</MenuItem>
            <MenuItem value={"drama"}>Drama</MenuItem>
            <MenuItem value={"adventure"}>Aventura</MenuItem>
            <MenuItem value={"scifi"}>Sci-Fi</MenuItem>
            <MenuItem value={"comedy"}>Comedia</MenuItem>
            <MenuItem value={"fantasy"}>Fantasia</MenuItem>
            <MenuItem value={"action"}>Acción</MenuItem>
            <MenuItem value={"supernatural"}>Supenatural</MenuItem>
          </Select>
        </FormControl>
      </div>
      {content}
    </div>
  );
}
