import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context as MovieContext } from '../../context/MoviesDataContext'
import MovieSearch from '../MovieSearch/MovieSearch'
import SearchBar from '../SearchBar/SearchBar'
import './SearchPage.scss'

function SearchPage(props) {
  const { state } = useContext(MovieContext)

  return (
    <>
      <SearchBar navHistory={props.history} />
      <section id='movieSearchListSection'>
        {mapFilms(state)}
      </section>
    </>
  )
}

const mapFilms = (state) => {
  if (state.moviesSearchResult.length > 0) {
    return state.moviesSearchResult.map((movie, i) => {
      return (
        <div className='searchedMovieContainer' key={i} >
          <NavLink to={`/movies/${movie.id}`}>
            <MovieSearch movieData={movie} />
          </NavLink>
        </div>
      )
    })
  } else {
    return (
    <div>
      <span>No se han encontrado coincidencias</span>
    </div>
    )
  }
}

export default SearchPage