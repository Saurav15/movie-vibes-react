import axios from "../../../config/axios";

export const fetchMoviesFromGenre = async (genreId) => {
  try {
    const { data } = await axios.get(`/discover/movie?with_genres=${genreId}`);
    return data.results;
  } catch (error) {
    console.log("Error while fetching movies with genre. ", error);
  }
};
