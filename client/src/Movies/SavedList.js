import React from 'react';
// import {Link} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import {MovieCard} from './MovieCard'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to = "/">
    <div className="home-button">Home</div>
    </Link>
    {/* <Route exact path='/' component = {MovieCard} /> */}
    
  </div>
);

export default SavedList;
