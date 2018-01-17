import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Movies from "./Movies/Movies";
import Genre from "./Movies/Genre";

import Home from "./Home";

const App = () => (
  <div className="body">
    <nav>
      <div className="logo">Chaltin's Favorite Movies</div>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/movies">Movies</Link>
      {"  "}
      <Link to="/genre">Genre</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/genre" component={Genre} />
    </Switch>
    <footer>
      Coded by <a href="http:/www.fullstackchaltin.nyc" target="_blank">Chaltin Pagan</a>. 
      Icons by <a href="https://icons8.com" target="_blank">Icons8</a>.
    </footer>
  </div>
);

export default App;
