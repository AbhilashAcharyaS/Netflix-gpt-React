import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
        isMuted: false
    },
    reducers:{
        changeLang:(state,action)=>{
            state.lang = action.payload;
        },
        toggleMuteValue: (state, action) => {
            state.isMuted= !state.isMuted;
          }
    }
})

export const {changeLang, toggleMuteValue}= configSlice.actions;
export default configSlice.reducer;