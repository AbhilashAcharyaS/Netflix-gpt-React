import Header from "./Header"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../customHooks/usePopularMovies"
import useUpcomingMovies from "../customHooks/useUpcomingMovies"
import useTopRatedMovies from "../customHooks/useTopRatedMovies"
import GPTSearchPage from "./GPTSearchPage"
import { useSelector } from "react-redux"

const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GPTSearchPage/> : <>
        <MainContainer/>
        <SecondaryContainer/></>
      }
      
      
    </div>
  )
}

export default Browse