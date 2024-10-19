import { useDispatch } from 'react-redux';
import { IMG_CDN_URL } from '../Utils/constants'
import {playButtonClick, updateMovieToDisplay} from "../Utils/moviesSlice"
import { setShowGptToFalse } from '../Utils/GPTSlice';

const MovieCard = ({film}) => {
  // console.log(posterPath);
  const dispatch = useDispatch();

  const handleMoviePosterClick = ()=>{
    // console.log(film);
    dispatch(updateMovieToDisplay(film))
    dispatch(setShowGptToFalse())
    dispatch(playButtonClick());
  }
  return (
    <div>
      <div className='w-28 md:w-40 p-2'>
        <img className='rounded-lg hover:scale-110 hover:rounded-xl cursor-pointer h-[140px] md:h-[216px]' src={IMG_CDN_URL+film.poster_path} alt="moviePoster" onClick={handleMoviePosterClick} />
      </div>
    </div>
  )
}

export default MovieCard