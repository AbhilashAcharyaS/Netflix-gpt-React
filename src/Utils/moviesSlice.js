import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
        playButtonClicked:false,
        movieToDisplay:{
            "adult": false,
            "backdrop_path": "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg",
            "genre_ids": [
                14,
                27,
                28
            ],
            "id": 1087822,
            "original_language": "en",
            "original_title": "Hellboy: The Crooked Man",
            "overview": "Hellboy and a rookie BPRD agent get stranded in 1950s rural Appalachia. There, they discover a small community haunted by witches, led by a local devil with a troubling connection to Hellboy's past: the Crooked Man.",
            "popularity": 1158.95,
            "poster_path": "/iz2GabtToVB05gLTVSH7ZvFtsMM.jpg",
            "release_date": "2024-08-29",
            "title": "Hellboy: The Crooked Man",
            "video": false,
            "vote_average": 4.9,
            "vote_count": 130
        },

        searchMovieResult:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        updateMovieToDisplay : (state,action)=>{
            state.movieToDisplay = action.payload;
        },
        addSearchMovieResult:(state,action)=>{
            state.searchMovieResult= action.payload;
        },
        playButtonClick : (state,action)=>{
            state.playButtonClicked=!state.playButtonClicked;
        }
    }
});

export const {addNowPlayingMovies ,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addTrailerVideo,updateMovieToDisplay,addSearchMovieResult,playButtonClick} = moviesSlice.actions;
export default moviesSlice.reducer;