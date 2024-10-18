import React from 'react';
import MovieList from "./MovieList"
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && 
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-60 ml-0 md:ml-8 relative z-20'>
      <MovieList title={"Now in Big Screens"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer