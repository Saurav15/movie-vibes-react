import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mainMovie: null,
    movieCategories: [],
  },
  reducers: {
    addMainMovie: (state, action) => {
      state.mainMovie = action.payload;
    },
    addMovieCategories: (state, action) => {
      state.movieCategories = action.payload;
    },
  },
});

export const { addMainMovie, addMovieCategories } = movieSlice.actions;

export default movieSlice.reducer;
