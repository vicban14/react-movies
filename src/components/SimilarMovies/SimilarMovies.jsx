import React, { useContext, useEffect } from 'react'
import { Context as MovieContext} from '../../context/MoviesDataContext'
import './SimilarMovies.scss'
import { NavLink } from 'react-router-dom'

const SimilarMovies = ({movieId}) => {
  const { state, getSimilarMoviesById } = useContext(MovieContext)

  useEffect(() => {
    if (movieId) {
      getSimilarMoviesById({ movieId })
    }
  }, [movieId])

  return (
    <section>
      <div className="similarMoviesContainer">
        <h3 id='extraMoviesHeading'>Películas similares:</h3>
        {state.similarMovies.map((movie, i) => {
          if (i <= 4 ) {
            return (
            <NavLink to={`/movies/${movie.id}`} key={i} >
              <div className="similarMovie" >
                <img src={`${process.env.REACT_APP_IMAGES_BASE_URL}${movie.backdrop_path}`} alt={`${movie.title}`} />
                <div>
                  <h3>{movie.title} ({movie.vote_average})</h3>
                </div>
              </div>
            </NavLink>
            )}
          })
        }
      </div>
    </section>
  )
}

export default SimilarMovies