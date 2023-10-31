import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing the movie state.
 */
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mainMovie: null,
    movieCategories: [],
  },
  reducers: {
    /**
     * Action to add the main movie to the state.
     * @param {Object} state - The current movie state.
     * @param {Object} action - The action with main movie data.
     */
    addMainMovie: (state, action) => {
      state.mainMovie = action.payload;
    },
    /**
     * Action to add movie categories to the state.
     * @param {Object} state - The current movie state.
     * @param {Object} action - The action with movie categories data.
     */
    addMovieCategories: (state, action) => {
      if (state.movieCategories.length === 0) {
        state.movieCategories = action.payload;
      } else {
        action.payload.forEach((movieCategory) => {
          state.movieCategories.push(movieCategory);
        });
      }
    },
  },
});

export const { addMainMovie, addMovieCategories } = movieSlice.actions;

export default movieSlice.reducer;
