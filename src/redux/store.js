import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

/**
 * Configures the Redux store with user and movie reducers.
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
