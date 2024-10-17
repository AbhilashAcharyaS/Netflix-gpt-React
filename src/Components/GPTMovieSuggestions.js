import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const GPTMovieSuggestions = () => {
  const movies = useSelector(store=>store.movies.searchMovieResult);
  return (
    <div>
      {movies?.length===0 && <h1 className='text-center text-white font-semibold text-xl mt-4'>No movies found!</h1>}
      {movies?.length && <div className='flex justify-evenly overflow-x-scroll no-scrollbar p-2 '>
      <div className='flex bg-black bg-opacity-50 rounded-xl'>
        {movies?.filter((movie)=>(movie.poster_path != null))?.map((movie)=>(<MovieCard key={movie.id} film={movie} />))}
        
      </div>
      </div>}
    </div>
  )
}

export default GPTMovieSuggestions