import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
        movieToDisplay:{
                "adult": false,
                "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
                "genre_ids": [
                    27,
                    18,
                    878
                ],
                "id": 933260,
                "original_language": "en",
                "original_title": "The Substance",
                "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
                "popularity": 4964.05,
                "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
                "release_date": "2024-09-07",
                "title": "The Substance",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 502
            
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
        }
    }
});

export const {addNowPlayingMovies ,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addTrailerVideo,updateMovieToDisplay,addSearchMovieResult} = moviesSlice.actions;
export default moviesSlice.reducer;