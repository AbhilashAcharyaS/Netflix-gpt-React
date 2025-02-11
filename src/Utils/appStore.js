import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./GPTSlice";
import configReducer from "./configSlice"

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer
        },
        preloadedState:loadFromLocalStorage()

    }
);

function saveToLocalStorage(state){

    try{
      const serialState = JSON.stringify(state)
      localStorage.setItem("reduxStore",serialState)
    }catch(e){
      console.warn(e);
    }
  }
  
  function loadFromLocalStorage(){

    try{
      const serialisedState = localStorage.getItem("reduxStore");
      if(serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    }catch(e){
      console.warn(e);
      return undefined;
    }
  }

  appStore.subscribe(()=>saveToLocalStorage(appStore.getState()));


export default appStore;