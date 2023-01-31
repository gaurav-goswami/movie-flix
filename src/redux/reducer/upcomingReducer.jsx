import action_type from "../constant/constant";

const  initialState = {
    upcomingMovies: [],
    upcomingShows: [],
    upcomingMoviePage: 1,
    upcomingShowPage: 1
}

const upcomingReducer = (state = initialState, action) => {
    switch(action.type){
        case action_type.getUpcomingMovies:
            return{
                ...state,
                upcomingMovies: action.payload
            }

        case action_type.getUpcomingShows:
            return{
                ...state,
                upcomingShows: action.payload
            }

        case action_type.getNewUpcomingMoviePage:
            return{
                ...state,
                upcomingMoviePage: action.payload
            }

        case action_type.getNewUpcomingShowPage:
            return{
                ...state,
                upcomingShowPage: action.payload
            }

        default:
            return state

    }

}


export default upcomingReducer