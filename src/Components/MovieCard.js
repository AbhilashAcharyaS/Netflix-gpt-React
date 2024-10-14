import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  // console.log(posterPath);
  
  return (
    <div>
      <div className='w-40 p-2'>
        <img className='rounded-lg hover:scale-110 hover:rounded-xl cursor-pointer' src={IMG_CDN_URL+posterPath} alt="moviePoster" />
      </div>
    </div>
  )
}

export default MovieCard