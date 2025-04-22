import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const movies= useSelector((store)=>store.movies?.nowPlayingMovies);
  const film= useSelector(store=>store.movies.movieToDisplay);
  if(!movies) return;
  
  // const mainMovie =movies[1];
  const mainMovie=film;

  // console.log(mainMovie);
  
  const {title , overview, id, vote_average , vote_count, release_date} =mainMovie;  
  return (
    <div className='pt-[45%] md:pt-0 bg-black'>
        <VideoTitle title={title} overview={overview} vote_average={vote_average} vote_count={vote_count} release_date={release_date} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer