import React, { useEffect, useContext } from 'react'
import env from 'react-dotenv'
import { Context as MovieContext} from '../../context/MoviesDataContext'
import Movie from '../Movie/Movie'

const Movies = (props) => {
  const movieType = props.match.params.movieType
  const { state, getPopularMovies } = useContext(MovieContext)

  useEffect(() => {
    getPopularMovies( { movieType } )
  }, [])

  return (
    <>
      <span>Tipo de película: {movieType}</span>
      {console.log(state)}
      {state.movies.map((movie, i) => (
        <div key={i} >
          <Movie movieData={movie} />
        </div>
      )
      )}
    </>
  )
}

export default Movies