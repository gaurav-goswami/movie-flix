import action_type from "../constant/constant";

const initialState = {
    popularMoviePage: 1,
    popularShowPage: 1,
    popularMovies: [],
    popularShows: []
}

const popularReducer = (state = initialState, action) => {

    switch(action.type){

        case action_type.getPopularMovies:
            return{
                ...state,
                popularMovies: action.payload
            }

        case action_type.getPopularShows:
            return{
                ...state,
                popularShows: action.payload
            }

        case action_type.getNewPopularMoviePage:
            return{
                ...state,
                popularMoviePage: action.payload,
            }

        case action_type.getNewPopularShowPage:
            return{
                ...state,
                popularShowPage: action.payload,
            }

        default:
            return state
    }

}


export default popularReducer;