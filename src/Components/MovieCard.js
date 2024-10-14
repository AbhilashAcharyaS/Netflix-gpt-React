import { useDispatch } from 'react-redux';
import { IMG_CDN_URL } from '../Utils/constants'
import {updateMovieToDisplay} from "../Utils/moviesSlice"

const MovieCard = ({film}) => {
  // console.log(posterPath);
  const dispatch = useDispatch();

  const handleMoviePosterClick = ()=>{
    console.log(film);
    dispatch(updateMovieToDisplay(film))
    
  }
  return (
    <div>
      <div className='w-40 p-2'>
        <img className='rounded-lg hover:scale-110 hover:rounded-xl cursor-pointer' src={IMG_CDN_URL+film.poster_path} alt="moviePoster" onClick={handleMoviePosterClick} />
      </div>
    </div>
  )
}

export default MovieCard