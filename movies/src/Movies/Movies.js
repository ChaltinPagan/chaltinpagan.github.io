// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import movieAPI from "./movieAPI";
// Import React Components
import Movie from "./Movie";
import MovieList from "./MovieList";

class Movies extends React.Component {
  renderMovie = props => {
    const { id } = props.match.params;
    console.log("id: ", id);
    const movie = movieAPI.getOne(id);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return <Movie title={movie.title} 
      year={movie.year} 
      genre={movie.genre}
      director={movie.director} 
      actors={movie.actors}
      link={movie.link}
      img={movie.img}/>;
    }
  };

  renderMovieList = () => {
    return <MovieList />;
  };

  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default Movies;
