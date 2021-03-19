import React, { useContext } from 'react'
import { Context as MovieContext } from '../../context/MoviesDataContext.js'
import './SearchBar.scss'

function SearchBar({navHistory})  {
  const { state, searchMovieByTitle } = useContext(MovieContext)

  const handleChange = async (ev) => {
    const searchText = ev.target.value.replace(' ', '-')
    searchMovieByTitle(searchText)
  }

  const handleSubmit = async (ev) => {
    if (ev.keyCode === 13) {
      const searchText = ev.target.value.replace(' ', '-')
      await searchMovieByTitle(searchText)
      if(state.moviesSearchResult.length === 1) {
        const movieId = state.moviesSearchResult[0].id
        navHistory.push(`/movies/${movieId}`)
      } else {
        navHistory.push(`/movies/search`)
      }
    }
  }

  return (
    <div className='searchBarContainer' >
      <input type='text' id='searchBar' placeholder='Busca una película por título...' onChange={(e) => handleChange(e)} onKeyUp={(e) => handleSubmit(e)} />
    </div>
  )
}

export default SearchBar