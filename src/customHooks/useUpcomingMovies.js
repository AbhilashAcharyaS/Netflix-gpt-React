import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS} from "../Utils/constants";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
  const upcomingMovies= useSelector(store=>store.movies.upcomingMovies)
  const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
   if(!upcomingMovies) getUpcomingMovies();
  },[])

}

export default useUpcomingMovies;