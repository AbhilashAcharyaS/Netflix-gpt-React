import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {  
  // console.log(movies);
  
  return (
    <div className='p-1 md:p-2'>
        <h1 className='text-white font-bold text-lg md:text-2xl p-2 md:p-4'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
      <div className='flex'>
        {movies?.map((movie)=>(<MovieCard key={movie.id} film={movie} />))}
        
      </div>
      </div>
    </div>
  )
}

export default MovieList