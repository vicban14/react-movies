import React from 'react'
import env from 'react-dotenv'

const Movie = ({ movieData }) => {
  return (
    <>
      <h3>{movieData.title}</h3>
      <img src={`${env.IMAGES_BASE_URL}${movieData.poster_path}`} />
      <p>{movieData.vote_average}</p>
      <p>{movieData.release_date}</p>
    </>
  )
}

export default Movie