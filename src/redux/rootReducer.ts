import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthRedux/authSlice';
import moviesReducer from './MoviesRedux/moviesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer
});

export default rootReducer;
