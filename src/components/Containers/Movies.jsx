import React, { useEffect, useContext } from 'react'
import { Context as MovieContext} from '../../context/MoviesDataContext'
import Movie from '../Movie/Movie'
import './Movies.scss'

const Movies = (props) => {
  const movieType = props.match.params.movieType
  const { state, getPopularMovies } = useContext(MovieContext)

  useEffect(() => {
    getPopularMovies( { movieType } )
  }, [])

  return (
    <>
      <span>{movieType.charAt(0).toUpperCase() + movieType.slice(1)}</span>
      <div className='movieContainer'>
      {state.movies.map((movie, i) => (
        <div key={i} className='movie' >
          <Movie movieData={movie} />
        </div>
      )
      )}
      </div>
    </>
  )
}

export default Movies