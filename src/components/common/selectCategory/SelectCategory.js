import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Section from "../section/Section";
import "./SelectCategory.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectCategory() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  let content;

  switch (setCategory) {
    case "Romance":
      content = (<p>soy romance</p>);
      break;
    case "Drama":
      content = (<p>soy drama</p>);
      break;
    case "Aventura":
      content = (<p>soy adventure</p>);
      break;
    case "Sci-Fi":
      content = (<p>soy scifi</p>);
      break;
    case "Comedy":
      content = (<p>soy comedy</p>);
      break;
    case "Fantasy":
      content = (<p>soy fantasia</p>);
      break;
    default:
      content = "default";
  }

  return (
    <div className="select-section">
      <Section title="Descubre por categoría" />
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
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
        </Select>
      </FormControl>
    </div>
  );
}
