import React from 'react'
import env from 'react-dotenv'

const Movie = ({ movieData }) => {
  return (
    <>
      <img src={`${env.IMAGES_BASE_URL}${movieData.poster_path}`} alt={`${movieData.title}`} />
      <div className='average'>
          <p>{movieData.vote_average}</p>
      </div>
      <div>
        <h3>{movieData.title}</h3>
        <p className='releaseDate'>{movieData.release_date}</p>
      </div>
    </>
  )
}

export default Movie