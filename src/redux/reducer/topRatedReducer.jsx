import action_type from "../constant/constant";

const initialState = {
    topRatedMovies: [],
    topRatedShows: [],
    topRatedMoviePage: 1,
    topRatedShowPage: 1
}

const topRatedReducer = (state = initialState, action) => {
    switch(action.type){
        case action_type.getTopRatedMovies:
            return{
                ...state,
                topRatedMovies: action.payload
            }

        case action_type.getTopRatedShows:
            return{
                ...state,
                topRatedShows: action.payload
            }

        case action_type.getNewTopRatedMoviePage:
            return{
                ...state,
                topRatedMoviePage: action.payload
            }
        
        case action_type.getNewTopRatedShowPage:
            return{
                ...state,
                topRatedShowPage: action.payload
            }
        default:
            return state
        
    }
}

export default topRatedReducer;