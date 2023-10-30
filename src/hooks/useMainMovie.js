import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMainMovie } from "../redux/movieSlice";
import { fetchMovieVideos } from "../utils/api/movies/fetchMovieVidoes";

export const useMainMovie = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const mainMoveDataExists = useSelector((state) => state.movies.mainMovie);

  const allMovieCategories = useSelector(
    (state) => state.movies.movieCategories
  );

  const nowPlayingMovies = getNowPlayingMovies(allMovieCategories);

  useEffect(() => {
    if (
      !nowPlayingMovies ||
      nowPlayingMovies?.length === 0 ||
      mainMoveDataExists
    )
      return;

    const mainMovie = nowPlayingMovies[0];

    const setMainMovieDetails = async (movie) => {
      // Fetch all the videos releted to the movie.
      const movieVideos = await fetchMovieVideos(movie);

      // Out of all videos select one video that is to be played
      const videoToPlay =
        movieVideos.find((video) => video.type === "Trailer") || movieVideos[0];

      // Add that video in the main movie object and store the whole obj in the redux
      const mainMovieWithVideoData = { ...movie, video: videoToPlay };

      dispatch(addMainMovie(mainMovieWithVideoData));
    };

    setMainMovieDetails(mainMovie);
    setLoading(() => false)
  }, [nowPlayingMovies]);

  return { loading, setLoading };
};


const getNowPlayingMovies = (allMovieCategories) => {
  if (
    allMovieCategories.length === 0 ||
    !allMovieCategories.filter((category) => category.type === "Now Playing")
  )
    return;

  const nowPlayingMoviesObject = allMovieCategories.filter(
    (category) => category.type === "Now Playing"
  );
  return nowPlayingMoviesObject[0].movies;
};
