import React, { useContext } from 'react'
import { Context as MovieContext } from '../../context/MoviesDataContext.js'
import './SearchPage.scss'

function SearchPage() {
  const { state } = useContext(MovieContext)

  return (
    <section id='movieListSection'>
    {mapFilms(state)}
    </section>
  )
}

const mapFilms = (state) => {
  if (state.moviesSearchResult.length > 0) {
    return state.moviesSearchResult.map(movie => {
      return (
        <div className='searchedMovieContainer'>
          <span>{movie.title}</span>
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