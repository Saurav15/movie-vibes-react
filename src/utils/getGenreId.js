import axios from "../config/axios";
export const getGenreId = async (genreType) => {
  try {
    const allGenres = (await axios.get("/genre/movie/list?language=en")).data
      .genres;

    const getGivenGenere = allGenres.find(
      (genere) => genere?.name === genreType
    );

    return getGivenGenere?.id;
  } catch (error) {
    console.log("Failed to get genre id.");
  }
};
