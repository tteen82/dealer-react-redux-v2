import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';

const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';
const VIEW_CART = 'VIEW_CART';
const ADDING_CART = 'ADDING_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_CATEGORIES = 'SET_CATEGORIES';

export const setUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get('/api/users')).data;
    dispatch({ type: SET_USERS, users });
  };
};
let count = 0;

export const addingUser = (name) => {
  return async (dispatch) => {
    if (!name) name = `Jon Doe(${++count})`;
    const user = (await axios.post('/api/users', { name })).data;
    dispatch({ type: ADD_USER, user });
  };
};

export const setCategories = () => {
  return async (dispatch) => {
    const categories = (await axios.get('/api/categories')).data;
    dispatch({ type: SET_CATEGORIES, categories });
  };
};

export const addingCart = (newEntry) => {
  return async (dispatch) => {
    if (!newEntry.userId) {
      alert('Please Choose User First');
      return;
    }
    const entry = (await axios.post('/api/cart', newEntry)).data;
    dispatch({ type: ADDING_CART, entry });
  };
};

export const viewCart = (userId) => {
  return async (dispatch) => {
    const { list, user } = (await axios.get(`/api/cart/${userId}`)).data;
    dispatch({ type: VIEW_CART, list, user });
  };
};

export const removeItem = (userId) => {
  return async (dispatch) => {
    const list = (await axios.delete(`/api/cart/${userId}`)).data;
    dispatch({ type: DELETE_ITEM, list });
  };
};

const initialState = {
  users: [],
  categories: [],
  cartUser: '',
  cartList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case ADDING_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.entry],
      };
    case VIEW_CART:
      return {
        ...state,
        cartUser: action.user,
        cartList: action.list,
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartList: action.list,
      };

    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk, loggerMiddleware));
