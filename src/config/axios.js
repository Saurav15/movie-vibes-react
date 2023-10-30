import axios from "axios";
import { API_ACCESS_TOKEN } from "./constants";

// Create an instance of Axios with default configurations
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_ACCESS_TOKEN}`
  },
});

export default instance;
