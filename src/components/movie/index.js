import {Link} from 'react-router-dom'

import './index.css'

const Movie = props => {
  const {movieData} = props
  const {title,rating, id} = movieData

  return (
    <li className="movie">
      <Link to={`/movies/${id}`} className="link-item">
        <img src={`https://image.tmdb.org/t/p/w500${movieData.moviePoster}`} alt="movie" className="movie-poster" />
        <p className='movie-name' >{title}</p>
        <rating className="movie-rating" >Rating : {rating}</rating>
      </Link>
    </li>
  )
}
export default Movie