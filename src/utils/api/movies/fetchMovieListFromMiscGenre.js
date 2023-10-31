import axios from "../../../config/axios";

/**
 * Fetches a list of movies from a miscellaneous genre line now-playing, popular, top-rated and upcoming.
 *
 * @param {string} genreType - The type of miscellaneous genre to fetch movies from.
 * @param {number} [page=1] - The page number (optional, defaults to 1).
 * @returns {Promise<Array>} A promise that resolves to an array of movies.
 */
export const fetchMovieListFromMiscGenre = async (genreType, page) => {
  try {
    const { data } = await axios.get(`/movie/${genreType}?page=${page || 1}`);
    return data.results;
  } catch (error) {
    console.log("Error While fetching movie list. ", error);
  }
};
