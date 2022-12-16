import React from 'react';
import { connect } from 'react-redux';
import { selectMovie, showingCasting, addingHero } from '../store';

const Movies = ({ movies, selectedMovie, addingHero }) => {
  return (
    <div id='list'>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <a
            href=''
            key={movie.id}
            onClick={(e) => {
              e.preventDefault();
              selectedMovie(movie.id);
            }}
          >
            <li>{movie.title}</li>
          </a>
        ))}
      </ul>
      <form
        id='newInput'
        onSubmit={(e) => {
          e.preventDefault();
          addingHero(e);
          e.target.name.value = '';
        }}
      >
        <h3> You can add any actors in any movies</h3>
        <input name='name' placeholder='add a new name' />
        <select name='movieId'>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}-{movie.year}
            </option>
          ))}
        </select>
        <button> Add a new Heros </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedMovie: (movie) => {
      dispatch(selectMovie(movie));
    },
    showingCasting: () => {
      return dispatch(showingCasting(false));
    },
    addingHero: (newHero) => {
      return dispatch(addingHero(newHero));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Movies);
