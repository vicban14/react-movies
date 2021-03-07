import createDataContext from './createDataContext'
import apiService from '../api/apiService'
import env from 'react-dotenv'

const moviesReducer = (state, action)  => {
  switch(action.type) {
    case 'GET_MOVIES_BY_CATEGORY':
      return { ...state, movies: action.payload };
    case 'GET_MOVIES_BY_ID':
      return { ...state, movieDataInfo: action.payload};
    case 'GET_SIMILAR_MOVIES_BY_ID':
      return { ...state, similarMovies: action.payload}
    default:
      return state;
  }
}

const getMoviesByCategory = (dispatch) => async ({movieType}) => {
  await apiService.get(`${movieType}?api_key=${env.API_MOVIE_DB}&language=es-ES&region=ES`)
  .then((response) => {
    dispatch({ type: 'GET_MOVIES_BY_CATEGORY', payload: response.data.results })
  })
  .catch((error) => {
    console.log(error)
    })
}

const getMovieById = (dispatch) => async ({movieId}) => {
  await apiService.get(`/${movieId}?api_key=${env.API_MOVIE_DB}&language=es-ES`)
  .then((response) => {
    dispatch({ type: 'GET_MOVIES_BY_ID', payload: response.data })
  })
  .catch((error) => {
    console.log(error)
  })
}

const getSimilarMoviesById = (dispatch) => async ({movieId}) => {
  await apiService.get(`/${movieId}/similar?api_key=${env.API_MOVIE_DB}&language=es-ES`)
  .then((response) => {
    dispatch({ type: 'GET_SIMILAR_MOVIES_BY_ID', payload: response.data.results })
  })
  .catch((error) => {
    console.log(error)
  })
}


export const { Context, Provider } = createDataContext(
  moviesReducer,
  { getMoviesByCategory, getMovieById, getSimilarMoviesById },
  { movies: [], movieDataInfo: undefined, similarMovies: [] }
)