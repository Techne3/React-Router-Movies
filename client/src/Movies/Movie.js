import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieList from './MovieList'

const Movie = (props) => {
  const [movie, setMovie] = useState({});


  // const ids = []
  useEffect(() => {
    const id = props.match.params.id

    

    
    // const id = ids.find(id => props.match.params.url=== `${id.url}`)
    // .find(item => item.id === Number(props.match.params.id));
    // const id = ids.find(id => props.match.params.id === `${id.id}`)
    //ids.find(item => item.id === Number(props.match.params.id))
    // idData.find(id => props.match.params.id === id.id);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(response => {
          setMovie(response.data);
          console.log(setMovie)

        })
        .catch(error => {
          console.error(error);
        });

  },[0]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  // if (!movie) {
  //   return <div>Loading movie information...</div>;
  // }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {/* {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))} */}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
