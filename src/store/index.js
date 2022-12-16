import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';

const SET_MOVIES = 'SET_MOVIES';
const SELECT_MOVIE = 'SELECT_MOVIE';
const SHOWING_CASTING = 'SHOWING_CASTING';
const SET_CASTING = 'SET_CASTING';
const ADDING_HERO = 'ADDING_HERO';
const REMOVE_HERO = 'REMOVE_HERO';

export const setMovies = () => {
  return async (dispatch) => {
    const movies = (await axios.get('/api/movies')).data;
    dispatch({ type: SET_MOVIES, movies });
  };
};

export const selectMovie = (movieId) => {
  return async (dispatch) => {
    const movie = (await axios.get(`/api/movies/${movieId}`)).data;
    dispatch({ type: SELECT_MOVIE, movie });
  };
};

export const showingCasting = () => {
  return (dispatch) => {
    dispatch({ type: SHOWING_CASTING });
  };
};

export const setCasting = (movieId) => {
  return async (dispatch) => {
    const castingList = (await axios.get(`/api/casting/${movieId}`)).data;
    dispatch({ type: SET_CASTING, castingList });
  };
};

export const removeHero = (castingId) => {
  return async (dispatch) => {
    const curretnCasting = (await axios.delete(`/api/casting/${castingId}`))
      .data;
    dispatch({ type: REMOVE_HERO, curretnCasting });
  };
};

export const addingHero = (newHero) => {
  const target = {
    name: newHero.target.name.value,
    movieId: newHero.target.movieId.value,
  };
  return async (dispatch) => {
    const casting = (await axios.post('/api/casting/', target)).data;
    const selectedMovie = (await axios.get(`/api/movies/${target.movieId}`))
      .data;
    dispatch({ type: ADDING_HERO, selectedMovie, casting });
  };
};

const initialState = {
  movies: [],
  selectedMovie: {},
  castingList: [],
  showing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.movie,
        castingList: [],
        showing: false,
      };
    case SHOWING_CASTING:
      return {
        ...state,
        showing: !state.showing,
      };
    case SET_CASTING:
      return {
        ...state,
        castingList: action.castingList,
      };
    case ADDING_HERO:
      return {
        ...state,
        selectedMovie: action.selectedMovie,
        castingList: action.casting,
        showing: true,
      };
    case REMOVE_HERO:
      return {
        ...state,
        castingList: action.curretnCasting,
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk, loggerMiddleware));
