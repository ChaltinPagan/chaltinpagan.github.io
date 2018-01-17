import React from "react";
import movieAPI from "./Movies/movieAPI";
import { Link } from "react-router-dom";

const movies = movieAPI.getAll();

const Home = () => (
  <div className="content">
    <h1>Welcome to <br/>Chaltin's Favorite Movies</h1>
    <div className="home-grid">
      {movies.map( el => 
      <Link to={`/movies/${el.id}`}><img key={el.title} src={el.img} alt={el.title}/></Link>)}
    </div>
  </div>
);

export default Home;
