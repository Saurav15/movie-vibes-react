import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMainMovie } from "../redux/movieSlice";
import { fetchMovieVideos } from "../utils/api/movies/fetchMovieVidoes";
import { fetchMovieListFromMiscGenre } from "../utils/api/movies/fetchMovieListFromMiscGenre";
import { CONSTANTS } from "../config/constants";

/**
 * Custom hook to fetch and add the main movie to the store.
 */
export const useMainMovie = async () => {
  const dispatch = useDispatch();
  const mainMovieAlreadyExists = useSelector((state) => state.movies.mainMovie);

  useEffect(() => {
    if (!mainMovieAlreadyExists) {
      (async () => {
        const mainMovie = await getMainMovie();
        dispatch(addMainMovie(mainMovie));
      })();
    }
  }, []);
};

/**
 * Fetches the main movie data.
 * @returns {Promise<Object|null>} The main movie data or null if an error occurs.
 */
const getMainMovie = async () => {
  try {
    // Fetch popular movies
    const popularMovies = await fetchMovieListFromMiscGenre(
      CONSTANTS.MISC_MOVIE_GENRE_PATHS.popular
    );

    // Get metadata of the main movie
    const mainMovieMetaData = popularMovies[0];

    // Fetch videos related to the main movie
    const mainMovieVideos = await fetchMovieVideos(mainMovieMetaData);

    // Select the video to play
    const videoToPlay =
      mainMovieVideos.find((video) => video.type === CONSTANTS.TRAILER) ||
      mainMovieVideos[0];

    // Combine the main movie metadata with the video data
    const mainMovie = { ...mainMovieMetaData, video: videoToPlay };

    return mainMovie;
  } catch (error) {
    console.log("Error from useMainMovie hook. ", error);
    return null;
  }
};


// export const useMainMovie = () => {
//   const dispatch = useDispatch();

//   const mainMovieData = useSelector((state) => state.movies.mainMovie);

//   const allMovieCategories = useSelector(
//     (state) => state.movies.movieCategories
//   );
//   const nowPlayingMovies = getNowPlayingMoviesFromStore(allMovieCategories);

//   useEffect(() => {
//     if (mainMovieData || !nowPlayingMovies || nowPlayingMovies.length === 0) {
//       return;
//     }

//     const mainMovie = nowPlayingMovies[0];

//     const setMainMovieDetails = async (movie) => {
//       try {
//         // Fetch all the videos related to the movie.
//         const movieVideos = await fetchMovieVideos(movie);

//         // Out of all videos, select one video that is to be played
//         const videoToPlay =
//           movieVideos.find((video) => video.type === "Trailer") ||
//           movieVideos[0];

//         // Add that video to the main movie object and store the whole object in the Redux
//         const mainMovieWithVideoData = { ...movie, video: videoToPlay };

//         dispatch(addMainMovie(mainMovieWithVideoData));
//       } catch (error) {
//         console.error("Error fetching main movie details:", error);
//       }
//     };

//     setMainMovieDetails(mainMovie);
//   }, [nowPlayingMovies]);

// };

// const getNowPlayingMoviesFromStore = (allMovieCategories) => {
//   if (
//     allMovieCategories.length === 0 ||
//     !allMovieCategories.filter((category) => category?.type === "Popular")
//   )
//     return;

//   const nowPlayingMoviesObject = allMovieCategories.filter(
//     (category) => category.type === "Popular"
//   );
//   return nowPlayingMoviesObject[0].movies;
// };
