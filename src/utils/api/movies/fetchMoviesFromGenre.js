import axios from "../../../config/axios";

/**
 * Fetches a list of movies from a specific genre.
 *
 * @param {number} genreId - The ID of the genre to fetch movies for.
 * @returns {Promise<Array>} A promise that resolves to an array of movies.
 */
export const fetchMoviesFromGenre = async (genreId) => {
  try {
    const { data } = await axios.get(`/discover/movie?with_genres=${genreId}`);
    return data.results;
  } catch (error) {
    console.log("Error while fetching movies with genre. ", error);
  }
};
