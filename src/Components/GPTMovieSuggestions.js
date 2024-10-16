import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const GPTMovieSuggestions = () => {
  const movies = useSelector(store=>store.movies.searchMovieResult);
  return (
    <div>
      <div className='flex overflow-x-scroll no-scrollbar pt-10'>
      <div className='flex'>
        {movies?.map((movie)=>(<MovieCard key={movies.id} film={movie} />))}
        
      </div>
      </div>
    </div>
  )
}

export default GPTMovieSuggestions