import axios from "../../../config/axios";

/**
 * Fetches a list of videos related to a specific movie.
 *
 * @param {Object} movie - The movie object with an 'id' property.
 * @returns {Promise<Array>} A promise that resolves to an array of videos.
 */
export const fetchMovieVideos = async (movie) => {
  try {
    const { data } = await axios.get(`/movie/${movie.id}/videos`);
    return data.results;
  } catch (error) {
    console.log("Error while fetching movie videos. ", error);
  }
};
