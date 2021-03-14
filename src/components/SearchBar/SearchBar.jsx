import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Context as MovieContext } from '../../context/MoviesDataContext.js'

function SearchBar({navHistory})  {
  const { state, searchMovieByTitle } = useContext(MovieContext)

  const handleChange = async (ev) => {
    const searchText = ev.target.value.replace(' ', '-')
    searchMovieByTitle(searchText)
    if (ev.charCode === 13) {
      const movieId = state.moviesSearchResult[0].id
      return (
        <Redirect from='/' to={`/movies/${movieId}`} />
      )
    } else {
      if(state.moviesSearchResult.length > 1) {
        document.getElementById('searchBar').placeholder = state.moviesSearchResult[0].title
      }
    }
  }

  const handleSubmit = async (ev) => {
    if (ev.charCode === 13) {
      const searchText = ev.target.value.replace(' ', '-')
      await searchMovieByTitle(searchText)
      if(state.moviesSearchResult.length > 1) {
        const movieId = state.moviesSearchResult[0].id
        navHistory.push(`/movies/${movieId}`)
      } else {

      }
    }
  }

  return (
    <div>
      <label>
        <input type='text' id='searchBar' placeholder='Search a movie' onChange={(e) => handleChange(e)} onKeyPress={(e) => handleSubmit(e)} />
        <input type='submit' value='enviar' onClick={() => searchMovieByTitle} />
      </label>
    </div>
  )
}

export default SearchBar