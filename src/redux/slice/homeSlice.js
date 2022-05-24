import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movies: null,
  moviesDetail: {},
};

export const HomeReducer = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    movieData(state, action) {
      state.movies = action.payload;
    },
    DetailMovie(state, action) {
      state.moviesDetail = action.payload;
    },
  },
});

export const ActionHomes = HomeReducer.actions;
