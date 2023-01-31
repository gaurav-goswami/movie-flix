import errorConstant from '../constant/errorConstant';


export const trendingMovieError = (data) => {
    return{
        type: errorConstant.trendingMovieError,
        payload : data
    }
}

export const trendingShowError = (data) => {
    return{
        type: errorConstant.trendingShowError,
        payload : data
    }
}