import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import movieAPI from "./movieAPI";

const RenderGenre = props => {
  const { genre } = props;
  const list = movieAPI.getGenre(genre);
  console.log("list:", list);
  return (
    <ul className="genre-list">
      {list.map(el => (
        <li key={el.title}>
          <Link to={`./movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
};

class Genre extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: ""
    };
  }

  handleChange = e => {
    this.setState({
      genre: e.target.value
    });
  };

  render() {
    const { genre } = this.state;
    const allGenre = movieAPI.getAllGenre();
    console.log("genre:", genre);
    return (
      <div className="genre-results">
        <h1>Choose a genre</h1>
        <select value={this.state.genre} onChange={this.handleChange}>
          {allGenre.map(el => 
            <option value={el}>{el}</option>
          )}
        </select>
        <h3>Results:</h3>
        <RenderGenre genre={genre} />
      </div>
    );
  }
}

export default Genre;
