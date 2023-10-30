import axios from '../../../config/axios'

export const fetchAllGenres = async () => {
    try {
        const { data } = await axios.get(`genre/movie/list?language=en`)
        return data.genres;
    } catch (error) {
        console.log("Error While fetching movie genre. ", error);
    }
}
