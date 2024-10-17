import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    // console.log(movieId);
    
const dispatch = useDispatch();
    
    const getMovieVideos = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        
        const allTrailers = json.results?.filter((video)=>video.type === 'Trailer');
        const trailer = allTrailers?.length>0 ? allTrailers[0] : json.results[0];
        // console.log(trailer);

        dispatch(addTrailerVideo(trailer))
        
    }    
    
    useEffect(()=>{
        getMovieVideos();
    },[movieId])
}

export default useMovieTrailer;