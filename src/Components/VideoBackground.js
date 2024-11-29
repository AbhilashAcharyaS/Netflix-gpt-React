import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';
import { IMG_CDN_URL } from '../Utils/constants';


const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerVideo= useSelector(store=>store.movies?.trailerVideo);
  // const playButtonStatus= useSelector(store=>store.movies?.playButtonClicked);
  const movie = useSelector(store=>store.movies.movieToDisplay);
  const movieImage = movie?.backdrop_path || movie?.poster_path;

  const isMuted = useSelector(store=>store.config.isMuted)

  if(trailerVideo.length === 0){
    return (
      <img className='w-full object-contain -z-20 max-h-[220px] md:max-h-[700px]' src={IMG_CDN_URL+ movieImage} alt="Movie backdrop" />
    );
  }

  else {
    return(
      <iframe className='w-full aspect-video z-20 ' src={`https://www.youtube.com/embed/${trailerVideo[trailerVideo.length-1]?.key}?autoplay=1&mute=${isMuted ? 1 : 0}&cc_load_policy=0&controls=0&showinfo=0&rel=0&autohide=1&modestbranding=1&iv_load_policy=3&playlist=${trailerVideo[trailerVideo.length-1]?.key}&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
  }
  // return (
  //   <div>
  //   {/* {playButtonStatus && <div className=''>
        
  //       <iframe className='w-full aspect-video z-20 ' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=0&mute=1&cc_load_policy=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  //   </div>}

  //   {
  //     playButtonStatus && <div className=''>        
  //     <img className='w-full object-contain -z-20' src={IMG_CDN_URL+ movie.backdrop_path } alt="Movie backdrop" />
  // </div>
  //   } */}

  //  <img className='w-full object-contain -z-20 max-h-[220px] md:max-h-[700px]' src={IMG_CDN_URL+ movieImage} alt="Movie backdrop" />

  //   </div>
  // )
}

export default VideoBackground