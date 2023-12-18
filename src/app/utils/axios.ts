import axios from 'axios';
import {CORE_API_URL} from "../../config-global";
// config

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CORE_API_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
