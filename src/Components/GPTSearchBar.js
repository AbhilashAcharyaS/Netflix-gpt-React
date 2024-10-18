import React, { useRef } from 'react'
import lang from '../Utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
// import client from '../Utils/openai';
// import Error from './Error';
import { API_OPTIONS } from '../Utils/constants';
import { addSearchMovieResult } from '../Utils/moviesSlice';
// import { addGptMovieResult } from '../Utils/GPTSlice';

const GPTSearchBar = () => {

    const language = useSelector(store=>store.config.lang);
    const searchText = useRef(null);

    const dispatch = useDispatch();

    const searchMovieTMDB = async(movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json = await data.json();
      // console.log(json.results);
      
      dispatch(addSearchMovieResult(json.results))
      return json.results;

    }

    const handleGPTSearchClick = async()=>{
      // console.log(searchText.current.value);
      //Api call to openAI
      // const gptQuery= "Act as a movie recommendation system and suggest some movies for the query :"+ searchText.current.value + ". Only give 5 movie names separated by comma";

      // const gptResult = await client.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });

      // if(!gptResult.choices) {
      //   return <div>
      //     <Error/>
      //   </div>
      // }

      // console.log(gptResult.choices);
      
      // const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
      // const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
      // const tmdbResults = await Promise.all(promiseArray);
      // dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))

      searchMovieTMDB(searchText.current.value);
      
    }
  return (
    <div className='pt-[40%] md:pt-[10%]'>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black w-11/12 md:w-1/2 mt-24 md:mt-0 flex justify-center items-center mx-auto p-4 rounded-full bg-opacity-50'>
            <input ref={searchText} className='p-4 text-center w-3/4 rounded-l-full' type='text' placeholder={lang[language].placeholderText} />
            <button onClick={handleGPTSearchClick} className='p-4 w-1/4 bg-red-600 font-bold text-white rounded-r-full'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar