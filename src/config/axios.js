import axios from "axios";
import { CONSTANTS } from "./constants";

// Create an instance of Axios with default configurations
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${CONSTANTS.API_ACCESS_TOKEN}`
  },
});

export default instance;
