import action_type from "../constant/constant";

const initialState = {
    castDetails: [],
}

const castReducer = (state = initialState , action) => {
    switch(action.type){
        case action_type.getCast:
            return{
                ...state,
                castDetails: action.payload
            }

        default:
            return state
    }
}

export default castReducer;