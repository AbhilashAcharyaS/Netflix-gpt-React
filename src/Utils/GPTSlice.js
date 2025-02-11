import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:'GPT',
    initialState:{
        showGptSearch : false,
        movieResults:null,
        movieNames:null,
        suggestions:{}
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
        },
        addSuggestion:(state,action)=>{
            state.suggestions = Object.assign(state.suggestions, action.payload);
        },
        removeSuggestions:(state,action)=>{
            state.suggestions={};
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult,setShowGptToFalse,addSuggestion,removeSuggestions}= GPTSlice.actions;

export default GPTSlice.reducer;