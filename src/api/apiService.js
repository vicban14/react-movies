import axios from 'axios'
import env from 'react-dotenv'

const BASE_URL = env.DB_BASE_URL
const API_VERSION = '3'

export default axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
});
