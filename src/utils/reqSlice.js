import { createSlice } from "@reduxjs/toolkit";
import requests from "../components/requests";

const reqSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers:{
        addRequest: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, action) => {
            const newArray = state.filter((r) => r._id != action.payload);
            return newArray;
        },
    }
})

export const {addRequest, removeRequest} = reqSlice.actions;
export default reqSlice.reducer;