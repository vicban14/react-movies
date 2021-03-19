import React from 'react'

const Movie = ({ movieData }) => {
  return (
    <>
      <div className='average'>
        <p>{movieData.vote_average}</p>
      </div>
      <img src={`${process.env.REACT_APP_IMAGES_BASE_URL}${movieData.poster_path}`} alt={`${movieData.title}`} />
      <div>
        <h3>{movieData.title}</h3>
        <p className='releaseDate'>{movieData.release_date}</p>
      </div>
    </>
  )
}

export default Movie