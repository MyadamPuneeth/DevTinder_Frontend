import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import requestReducer from "./reqSlice"
import connectionReducer from "./connectionSlice";
import { connect } from "react-redux";

const appStore  = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connection: connectionReducer,
        request: requestReducer
    }
})


export default appStore;