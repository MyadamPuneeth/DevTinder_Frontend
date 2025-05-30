import { createSlice } from "@reduxjs/toolkit";
import feed from "../components/feed";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers:{
        addFeed: (state, action) => {
            return action.payload;
        },
        removeFeed: (state, action) => null,
    }
})

export const {addFeed} = feedSlice.actions;
export default feedSlice.reducer;