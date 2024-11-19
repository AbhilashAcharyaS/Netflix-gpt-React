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
        <SecondaryContainer/>
        <div className="w-full p-20 bg-black bottom-0">
          <h4 className="text-slate-300 text-center">Developed by <a href="https://www.linkedin.com/in/abhilash-acharya-56ab61191" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Abhilash Acharya</a> </h4>
        </div>
        </>
      }
      
      
    </div>
  )
}

export default Browse