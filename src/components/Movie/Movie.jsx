import React from 'react'
import './Movie.scss'

const Movie = ({ movieData }) => {
  return (
    <div className='movie'>
      <div className='average'>
        <p>{movieData.vote_average}</p>
      </div>
      <img src={`${process.env.REACT_APP_IMAGES_BASE_URL}${movieData.poster_path}`} alt={`${movieData.title}`} />
      <div>
        <h3>{movieData.title}</h3>
        <p className='releaseDate'>{movieData.release_date}</p>
      </div>
    </div>
  )
}

export default Movie