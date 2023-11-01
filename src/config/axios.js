import axios from "axios";
import { CONFIG } from "./config";

// Create an instance of Axios with default configurations
const instance = axios.create({
  baseURL: CONFIG.TMDB_BASE_URL,
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${CONFIG.TMDB_API_ACCESS_TOKEN}`
  },
});

export default instance;
