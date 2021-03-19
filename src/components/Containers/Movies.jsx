import React, { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context as MovieContext} from '../../context/MoviesDataContext'
import Movie from '../Movie/Movie'
import SearchBar from '../SearchBar/SearchBar'
import './Movies.scss'

const H2_HEADING_OPTIONS = {
  popular: 'Películas populares',
  upcoming: 'Próximos estrenos',
  top_rated: 'Las más votadas'
}

const Movies = (props) => {
  const movieType = props.match.params.movieType || 'now_playing'
  const { state, getMoviesByCategory } = useContext(MovieContext)

  useEffect(() => {
    getMoviesByCategory( { movieType } )
  }, [ movieType ])

  return (
    <>
      {movieType === 'now_playing' ? <SearchBar navHistory={props.history} /> : ''}
      <section id='movieListSection' >
        <h2 id='pageTitle'>{H2_HEADING_OPTIONS[movieType]}</h2>
        <div className='movieContainer'>
        {state.movies.map((movie, i) => {
          if (movieType === 'popular') {
            if (i <= 9 ) return createMovieContainer(movie, i)
          } else {
              return createMovieContainer(movie, i)
            }
          }
        )}
        </div>
      </section>
    </>
  )
}

function createMovieContainer(movie, i) {
  return (
    <div key={i} className='movie' >
      <NavLink to={`/movies/${movie.id}`}>
        <Movie movieData={movie} />
      </NavLink>
  </div>
  )
}

export default Movies