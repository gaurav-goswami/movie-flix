import action_type from "../constant/constant";

const initialState = {
    searchValue : '',
    searchResult: [],
    mediaType: '',
    currentId: '',
    singleDetail: []
}


const searchReducer = (state = initialState, action) => {
    switch(action.type){
        
        case action_type.getSearchValue:
            return{
                ...state,
                searchValue: action.payload
            }

        case action_type.getSearchResult:
            return{
                ...state,
                searchResult: action.payload
            }
        
        case action_type.getMediaType:
            return{
                ...state,
                mediaType: action.payload
            }

        case action_type.getCurrentID:
            return{
                ...state,
                currentId: action.payload
            }

        case action_type.getSingleDetail:
            return{
                ...state,
                singleDetail: action.payload
            }

        default:
            return state
    }
}


export default searchReducer