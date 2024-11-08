import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
        isMuted: true
    },
    reducers:{
        changeLang:(state,action)=>{
            state.lang = action.payload;
        },
        setApp: (state, action) => {
            const { appState, appData } = action.payload;
            state[appState] = appData;
          }
    }
})

export const {changeLang, setApp}= configSlice.actions;
export default configSlice.reducer;