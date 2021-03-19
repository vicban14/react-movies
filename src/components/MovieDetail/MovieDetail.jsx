import React, { useContext, useEffect } from 'react'
import { Context as MovieContext} from '../../context/MoviesDataContext'
import SimilarMovies from '../SimilarMovies/SimilarMovies'
import './MovieDetail.scss'

const MovieDetail = ({match}) => {
  const { state, getMovieById } = useContext(MovieContext)
  const movieId = match.params.movieId

  useEffect(() => {
    if (movieId) {
      getMovieById({ movieId })
    }
  }, [movieId])

  const { movieDataInfo } = state

  if(movieDataInfo) {
    let genres = []
    movieDataInfo.genres.map(genre => genres.push(genre.name))

    return (
      <section>
        <div id='detailContainer'>
          <img src={`${process.env.REACT_APP_IMAGES_BASE_URL}${movieDataInfo.poster_path}`} alt={`${movieDataInfo.title}`} />
          <div id='infoContainer'>
            <h2>{movieDataInfo.title} <span>({obtainYearDate(movieDataInfo.release_date)})</span></h2>
            <ul>
              <li>{movieDataInfo.release_date}</li>
              <li>{genres.join(', ')}</li>
              <li>{movieDataInfo.runtime} min</li>
            </ul>
            <div className='average'>
              <p>{movieDataInfo.vote_average}</p>
            </div>
            <h4>Sinopsis</h4>
            <p id='synopsis'>{movieDataInfo.overview}</p>
          </div>
        </div>
        <SimilarMovies movieId={movieId} />
      </section>
    )}
  return (
    <>
    </>
  )
}

function obtainYearDate(string) {
  return string.split('-')[0]
}

export default MovieDetail