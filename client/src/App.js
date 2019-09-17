import React, { useState } from 'react';
import {Route} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
// import MovieCard from './Movies/MovieCard';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    console.log(...savedList)
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
          <Route exact path="/" component={MovieList} />
          <Route exact path ='/movies' component ={MovieList} />
          <Route path='/movies/:id' render={props => 
            <Movie {...props}  
            addToSavedList ={addToSavedList}
            />
        } />
          

      </div>
    </div>
  );
};

export default App;
