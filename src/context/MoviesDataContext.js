import createDataContext from './createDataContext'
import apiService from '../api/apiService'
import env from 'react-dotenv'

const moviesReducer = (state, action)  => {
  switch(action.type) {
    case 'GET_POPULAR_MOVIES':
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}

const getPopularMovies = (dispatch) => async ( { movieType } ) => {
  await apiService.get(`${movieType}?api_key=${env.API_MOVIE_DB}&language=es-ES&region=ES`)
  .then((response) => {
    dispatch({ type: 'GET_POPULAR_MOVIES', payload: response.data.results })
  })
  .catch((error) => {
    console.log(error)
    })
}

export const { Context, Provider } = createDataContext(
  moviesReducer,
  { getPopularMovies },
  { movies: [] }
)