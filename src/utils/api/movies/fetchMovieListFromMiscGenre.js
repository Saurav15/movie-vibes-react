import axios from '../../../config/axios'

export const fetchMovieListFromMiscGenre = async (genreType,page) => {
    try {
        const { data } = await axios.get(`/movie/${genreType}?page=${page || 1}`)
        return data.results;
    } catch (error) {
        console.log("Error While fetching movie list. ", error);
    }
}
