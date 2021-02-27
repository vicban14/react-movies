import React, { useEffect } from 'react'
import env from 'react-dotenv'
import apiService from '../../api/apiService'

const Movies = (props) => {
  const movieType = props.match.params.movieType

  useEffect(() => {
    apiService.get(`${movieType}?api_key=${env.API_MOVIE_DB}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      Tipo de película: {movieType}
    </div>
  )
}

export default Movies