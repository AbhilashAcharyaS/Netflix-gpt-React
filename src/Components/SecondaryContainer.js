import React from 'react';
import MovieList from "./MovieList"
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && 
    <div className=' bg-black'>
      <div className='-mt-60 ml-8 relative z-20'>
      <MovieList title={"Now in Big Screens"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"All time best"} movies={movies.nowPlayingMovies}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer