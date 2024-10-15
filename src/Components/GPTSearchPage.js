import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_IMG_URL } from '../Utils/constants'

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute brightness-50 -z-10">
        <img
          src={BG_IMG_URL}
          alt="Trending movies"
          className="h-screen object-cover md:w-screen md:h-screen"
        />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearchPage