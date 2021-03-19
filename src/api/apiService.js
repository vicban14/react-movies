import axios from 'axios'

const BASE_URL = process.env.REACT_APP_DB_BASE_URL
const API_VERSION = '3'

export default axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
});
