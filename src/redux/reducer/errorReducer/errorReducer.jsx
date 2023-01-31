import errorConstant from "../../constant/errorConstant";

const initialState = {
    trendingMovieError: false,
    trendingShowError: false,
}

const errorReducer = (state = initialState, action) => {
    switch(action.type){

        case errorConstant.trendingMovieError:
            return{
                ...state,
                trendingMovieError: action.payload
            }

        case errorConstant.trendingShowError:
            return{
                ...state,
                trendingShowError: action.payload
            }

        default:
            return state
    
    }
}