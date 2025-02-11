import React, { useEffect, useState } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import client from '../Utils/openai';
// import Error from './Error';
import { API_OPTIONS } from "../Utils/constants";
import { addSearchMovieResult } from "../Utils/moviesSlice";
import { addSuggestion } from "../Utils/GPTSlice";
// import { addGptMovieResult } from '../Utils/GPTSlice';

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  // const searchText = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionCache=useSelector(store=>store.gpt.suggestions)
  const dispatch = useDispatch();

  const searchSuggestedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchQuery +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    setSuggestions(json?.results);
    // console.log(suggestions);
    dispatch(addSuggestion({[searchQuery]:json?.results}))
  };

  useEffect(() => {
      const debounceTimer = setTimeout(() => {
        if(suggestionCache[searchQuery]){
          setSuggestions(suggestionCache[searchQuery])
        }
        else{
          searchSuggestedMovies()
        }
      }, 300);
      return () => {
        clearTimeout(debounceTimer);
      }
    
  }, [searchQuery]);


  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    dispatch(addSearchMovieResult(json.results));
    return json.results;
  };

  // const handleGPTSearchClick = async () => {
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

  //   searchMovieTMDB(searchQuery);
  // };
  return (
    <div className="pt-[40%] md:pt-[10%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-11/12 md:w-1/2 mt-24 md:mt-0 flex justify-center items-center mx-auto p-4 rounded-full bg-opacity-50"
      >
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-4 text-center w-3/4 rounded-l-full"
          type="text"
          placeholder={lang[language].placeholderText}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
        />
        <button
          onClick={()=>searchMovieTMDB(searchQuery)}
          className="p-4 w-1/4 bg-red-600 font-bold text-white rounded-r-full"
        >
          {lang[language].search}
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="w-10/12 md:w-2/5 z-20 mx-auto fixed right-0 left-0 bg-white px-2 py-2 max-h-[300px]  overflow-y-scroll rounded-xl border-2 border-blue-400 shadow-xl">
          <ul className="">
            {suggestions.filter(sug=>sug.poster_path != null).map((sug) => (
              <div key={sug.id}>
              <li className="py-1 px-4 my-1 hover:bg-gray-100 cursor-pointer" onClick={()=>{setSearchQuery(sug.title);setShowSuggestions(false)}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 mr-2 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>{" "}
                {sug.title}
              </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GPTSearchBar;
