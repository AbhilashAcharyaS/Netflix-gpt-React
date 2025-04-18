import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    // console.log(movieId);
    
const dispatch = useDispatch();
const trailerVideo= useSelector(store=>store.movies.trailerVideo)
    
    const getMovieVideos = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        
        const allTrailers = json.results?.filter((video)=>video.type === 'Trailer' || video.type === 'Teaser');
        // const trailer = allTrailers?.length>0 ? allTrailers[0] : json.results[0];
        // console.log(allTrailers);

        dispatch(addTrailerVideo(allTrailers))

        // console.log(allTrailers);
        // console.log(json.results);
        
        
        
    }    
    
    useEffect(()=>{
        getMovieVideos();
    },[movieId])
}

export default useMovieTrailer;