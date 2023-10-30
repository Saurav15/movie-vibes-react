import { useDispatch, useSelector } from "react-redux";
import { fetchAllGenres } from "../utils/api/movies/fetchAllGenres";
import { fetchMoviesFromGenre } from "../utils/api/movies/fetchMoviesFromGenre";
import { addMovieCategories } from "../redux/movieSlice";
import { useEffect, useState } from "react";
import { MISC_MOVIE_GENRE } from "../config/constants";
import { fetchMovieListFromMiscGenre } from "../utils/api/movies/fetchMovieListFromMiscGenre";

// Fetch first 6 genre movie list and from topRated,popluar, upcoming
export const useGetBrowsePageCarouselData = () => {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  const movieCategories = useSelector((state) => state.movies.movieCategories);

  const addBrowsePageDataToStore = async () => {
    const browsePageData = await fetchBrowsePageData();
    dispatch(addMovieCategories(browsePageData))
  };

  useEffect(() => {
    if (movieCategories.length === 0) {
      addBrowsePageDataToStore();
      setLoading(() => false)
    }
  }, [movieCategories]);

  return {loading, setLoading};
};






const fetchBrowsePageData = async () => {
  let browsePageData = [];

  // Fetch MISC genre data
  for (const { path, title } of MISC_MOVIE_GENRE) {
    const movieListWithMiscGenre = await fetchMovieListFromMiscGenre(path);
    browsePageData.push({ type: title, movies: movieListWithMiscGenre });
  };

  // Fetch all the genre
  const movieGenres = await fetchAllGenres();

  // For first 6 genres get the movie list
  const movieGenresToDisplay = movieGenres.slice(0, 6);

  // Fetch movies with these genres and update the store
  for (const { id, name } of movieGenresToDisplay) {
    const movieListWithGivenGenre = await fetchMoviesFromGenre(id);
    browsePageData.push({ type: name, movies: movieListWithGivenGenre });
  };

  return browsePageData;
};
