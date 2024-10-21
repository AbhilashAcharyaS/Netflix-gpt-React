import React from 'react';
import MovieList from "./MovieList"
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && 
    <div className=' bg-black'>
      <div className='lg:-mt-32 xl:-mt-52 2xl:-mt-24 ml-0 md:ml-8 relative z-20'>
      <MovieList title={"Now in Big Screens"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer