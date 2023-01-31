import { combineReducers } from "@reduxjs/toolkit";
import trendingReducer from "./trendingReducer";
import popularReducer from "./popularReducer";
import upcomingReducer from "./upcomingReducer";
import topRatedReducer from "./topRatedReducer";
import searchReducer from "./searchReducer";
import castReducer from "./castReducer";

const rootReducer = combineReducers({
    trendingReducer,
    popularReducer,
    upcomingReducer,
    topRatedReducer,
    searchReducer,
    castReducer
})

export default rootReducer;