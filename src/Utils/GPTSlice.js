import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:'GPT',
    initialState:{
        showGptSearch : false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        setShowGptToFalse:(state,action)=>{
            state.showGptSearch = false;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieNames=movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult,setShowGptToFalse}= GPTSlice.actions;

export default GPTSlice.reducer;