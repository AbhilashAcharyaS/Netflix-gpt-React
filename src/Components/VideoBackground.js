import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerVideo= useSelector(store=>store.movies?.trailerVideo);
  return (
    <div className=''>
        
        <iframe className='w-full aspect-video ' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&cc_load_policy=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground