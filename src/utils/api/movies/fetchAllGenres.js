import axios from '../../../config/axios';

/**
 * Fetches a list of all movie genres.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of movie genres.
 */
export const fetchAllGenres = async () => {
    try {
        const { data } = await axios.get(`/genre/movie/list?language=en`);
        return data.genres;
    } catch (error) {
        console.log("Error While fetching movie genre. ", error);
    }
};
