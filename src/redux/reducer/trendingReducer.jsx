import action_type from "../constant/constant";

const initialState = {
    trendingMovieTime: 'day',
    trendingShowTime: 'day',
    trendingMovies: [],
    trendingShows: []
}

const trendingReducer = (state = initialState , action) => {
    switch(action.type){
        
        case action_type.getTrendingMovies:
            return{
                ...state,
                trendingMovies: action.payload
            }
        
        case action_type.getTrendingShows:
            return{
                ...state,
                trendingShows: action.payload
            }

        case action_type.getTrendingMovieTime:
            return{
                ...state,
                trendingMovieTime: action.payload
            }
        
        case action_type.getTrendingShowTime:
            return{
                ...state,
                trendingShowTime: action.payload
            }

        default:
            return state;
    }
}

export default trendingReducer;