import React from 'react';
// import {Link} from 'react-router-dom';
import {Route, NavLink,Link} from 'react-router-dom';
import {MovieCard} from './MovieCard'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink exact to ={`/movies/${movie.id}`}
      activeStyle={{ color: "#24bab3", fontWeight: "bold" }}
      >
      <span className="saved-movie">{movie.title}</span>
      
      </NavLink>

    ))}
    <NavLink to = "/">
    <div className="home-button">Home</div>
    </NavLink>
    
  </div>
);

export default SavedList;
