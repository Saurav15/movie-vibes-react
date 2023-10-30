import axios from "../../../config/axios";

export const fetchMovieVideos = async (movie) => {
  try {
    const { data } = await axios.get(`/movie/${movie.id}/videos`);
    return data.results;
  } catch (error) {
    console.log("Error While fetching movie genre. ", error);
  }
};
