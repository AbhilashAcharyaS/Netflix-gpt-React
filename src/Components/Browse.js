import Header from "./Header"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../customHooks/usePopularMovies"
import useUpcomingMovies from "../customHooks/useUpcomingMovies"
import useTopRatedMovies from "../customHooks/useTopRatedMovies"

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse