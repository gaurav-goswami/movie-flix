import action_type from "../constant/constant";

// actions for trending movies and shows


export const getTrendingMovies = (data) => {
    return{
        type: action_type.getTrendingMovies,
        payload: data
    }
}

export const getTrendingShows = (data) => {
    return{
        type: action_type.getTrendingShows,
        payload: data
    }
}

// trending time

export const getTrendingMovieTime = (data) => {
    return{
        type: action_type.getTrendingMovieTime,
        payload: data
    }
}


export const getTrendingShowTime = (data) => {
    return{
        type: action_type.getTrendingShowTime,
        payload: data
    }
}


// popular movies/shows

export const getNewPopularMoviePage = (data) => {
    return{
        type: action_type.getNewPopularMoviePage,
        payload: data
    }
}

export const getNewPopularShowPage = (data) => {
    return{
        type: action_type.getNewPopularShowPage,
        payload: data
    }
}
export const getPopularMovies = (data) => {
    return{
        type: action_type.getPopularMovies,
        payload: data
    }
}


export const getPopularShows = (data) => {
    return{
        type: action_type.getPopularShows,
        payload: data
    }
}


// upcoming movies/shows

export const getUpcomingMovies = (data) => {
    return{
        type: action_type.getUpcomingMovies,
        payload: data
    }
}

export const getUpcomingShows = (data) => {
    return{
        type: action_type.getUpcomingShows,
        payload: data
    }
}

export const getNewUpcomingMoviePage = (data) => {
    return{
        type: action_type.getNewUpcomingMoviePage,
        payload: data
    }
}
export const getNewUpcomingShowPage = (data) => {
    return{
        type: action_type.getNewUpcomingShowPage,
        payload: data
    }
}


// top rated

export const getTopRatedMovies = (data) => {
    return{
        type: action_type.getTopRatedMovies,
        payload: data
    }
}

export const getTopRatedShows = (data) => {
    return{
        type: action_type.getTopRatedShows,
        payload: data
    }
}

export const getNewTopRatedMoviePage = (data) => {
    return{
        type: action_type.getNewTopRatedMoviePage,
        payload: data
    }
}

export const getNewTopRatedShowPage = (data) => {
    return{
        type: action_type.getNewTopRatedShowPage,
        payload: data
    }
}


// search value

export const getSearchValue = (data) => {
    return{
        type: action_type.getSearchValue,
        payload: data
    }
}

export const getSearchResult = (data) => {
    return{
        type: action_type.getSearchResult,
        payload: data
    }
}


// info

export const getMediaType = (data) => {
    return{
        type: action_type.getMediaType,
        payload: data
    }
}

export const getCurrentID = (data) => {
    return{
        type: action_type.getCurrentID,
        payload: data
    }
}

export const getSingleDetail = (data) => {
    return{
        type: action_type.getSingleDetail,
        payload: data
    }
}


// cast

export const getCast = (data) => {
    return{
        type: action_type.getCast,
        payload: data
    }
}