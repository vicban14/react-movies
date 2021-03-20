import React from 'react'
import './MovieSearch.scss'

const MovieSearch = ({ movieData }) => {
  return (
    <div className='movieSearched'>
      <div className='imageSearchContainer'>
        <img src={`${process.env.REACT_APP_IMAGES_BASE_URL}${movieData.poster_path}`} alt={`${movieData.title}`} />
      </div>
      <div className='infoContainer'>
        <h3>{movieData.title}</h3>
        <p>{movieData.overview}</p>
      </div>
    </div>
  )
}

export default MovieSearch