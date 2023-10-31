import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CONSTANTS } from "../config/constants";
import { fetchAllGenres } from "../utils/api/movies/fetchAllGenres";
import { fetchMoviesFromGenre } from "../utils/api/movies/fetchMoviesFromGenre";
import { addMovieCategories } from "../redux/movieSlice";
import { fetchMovieListFromMiscGenre } from "../utils/api/movies/fetchMovieListFromMiscGenre";

/**
 * Custom hook to fetch data in two batches and update the store for the Movie list carousel on the Browse page.
 * The first batch includes data from top-rated, popular, now-playing, and upcoming movies.
 * The second batch includes data from six random genres.
 * This approach optimizes performance by reducing the initial loading time, ensuring a faster and more responsive display for users.
 */
export const useGetBrowsePageCarouselData = () => {
  const dispatch = useDispatch();
  const [noOfBatchOneCategories, setNoOfBatchOneCategories] = useState(0);

  const movieCategories = useSelector((state) => state.movies.movieCategories);

  useEffect(() => {
    try {
      (async () => {
        if (movieCategories.length === 0) {
          // Fetch and add data from Batch One (top-rated, popular, now-playing, upcoming movies)
          const batchOneData = await fetchBrowsePageDataBatchOne();
          dispatch(addMovieCategories(batchOneData));
          setNoOfBatchOneCategories(batchOneData.length);
        } else if (movieCategories.length === noOfBatchOneCategories) {
          // Fetch and add data from Batch Two (six random genres)
          const batchTwoData = await fetchBrowsePageDataBatchTwo();
          dispatch(addMovieCategories(batchTwoData));
        }
      })();
    } catch (error) {
      console.log("Error in useGetBrowsePageCarouselData hook. ", error);
    }
  }, [noOfBatchOneCategories]);
};

/**
 * Fetches data for Batch One, which includes top-rated, popular, now-playing, and upcoming movies.
 * @returns {Promise<Array>} An array of data for Batch One.
 */
const fetchBrowsePageDataBatchOne = async () => {
  const browsePageData = [];

  // Fetch MISC genre data for top-rated, popular, now-playing, and upcoming movies
  for (const { path, title } of CONSTANTS.MISC_MOVIE_GENRE) {
    const movieListWithMiscGenre = await fetchMovieListFromMiscGenre(path);
    browsePageData.push({ type: title, movies: movieListWithMiscGenre });
  }

  return browsePageData;
};

/**
 * Fetches data for Batch Two, which includes data from six random genres.
 * @returns {Promise<Array>} An array of data for Batch Two.
 */
const fetchBrowsePageDataBatchTwo = async () => {
  const browsePageData = [];

  // Fetch all the genres
  const movieGenres = await fetchAllGenres();

  // Select the first 6 genres for movie list
  const movieGenresToDisplay = movieGenres.slice(0, 6);

  // Fetch movies with these genres and update the store
  for (const { id, name } of movieGenresToDisplay) {
    const movieListWithGivenGenre = await fetchMoviesFromGenre(id);
    browsePageData.push({ type: name, movies: movieListWithGivenGenre });
  }

  return browsePageData;
};
