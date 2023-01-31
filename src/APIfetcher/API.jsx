import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getTrendingMovies, getTrendingShows, getPopularMovies, getPopularShows, getUpcomingMovies, getUpcomingShows,getTopRatedMovies, getTopRatedShows, getSearchResult, getSingleDetail, getCast } from "../redux/action/actions";
import { trendingMovieError, trendingShowError} from "../redux/action/errorActions";
import { useSelector } from "react-redux";


// Trending Movies


export const GetTrendingMovies = () => {
    const dispatch = useDispatch();
    const trending_time = useSelector((state) => state.trendingReducer.trendingMovieTime);

    const trendingMoviesFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getTrendingMovies(data));
            return data;
            
        } catch (error) {
            dispatch(trendingMovieError(true))
        }
    }

    const {data, status, isLoading} = useQuery(['trendingMovies', trending_time] , () => trendingMoviesFetcher(`https://api.themoviedb.org/3/trending/movie/${trending_time}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`))

    return {isLoading}

}


// Trending Tv Shows

export const GetTrendingShows = () => {
    const dispatch = useDispatch();
    const trending_time = useSelector((state) => state.trendingReducer.trendingShowTime);

    const trendingShowsFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getTrendingShows(data));
            return data;
            
        } catch (error) {
            dispatch(trendingShowError(true))
        }
    }

    const {isLoading} = useQuery(['trendingShows', trending_time] , () => trendingShowsFetcher(`https://api.themoviedb.org/3/trending/tv/${trending_time}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`))

    return {isLoading}

}


// Popular Movies

export const GetPopularMovies = () => {

    const dispatch = useDispatch();

    const page = useSelector((state) => state.popularReducer.popularMoviePage)

    const popularMoviesFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getPopularMovies(data));
            return data;

        } catch (error) {
            return error
        }
    }

    const {data, status, isLoading} = useQuery(['popularMovies', page] , () => popularMoviesFetcher(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`))


    return {data, status, isLoading}

}


// Popular Shows

export const GetPopularShows = () => {

    const dispatch = useDispatch();
    const page = useSelector((state) => state.popularReducer.popularShowPage)


    const popularShowsFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getPopularShows(data))
            return data;
            
        } catch (error) {
            return error;
        }
    }

    const {isLoading, data} = useQuery(['popularShows' , page] , () => popularShowsFetcher(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`))

    return {isLoading}

}



// upcoming movies

export const GetUpcomingMovies = () => {

    const dispatch = useDispatch();
    const page = useSelector((state) => state.upcomingReducer.upcomingMoviePage)


    const upcomingMoviesFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getUpcomingMovies(data));
            return data;
        } catch (error) {
            return error
        }
    }   


    const {isLoading} = useQuery(['upcomingMovies' , page] , () => upcomingMoviesFetcher(` https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`))


    return {isLoading}

}

// upcoming shows

export const GetUpcomingShows = () => {

    const dispatch = useDispatch();
    const page = useSelector((state) => state.upcomingReducer.upcomingShowPage)


    const upcomingMoviesFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getUpcomingShows(data));
            return data;
        } catch (error) {
            return error
        }
    }   


    const {isLoading} = useQuery(['upcomingShows' , page] , () => upcomingMoviesFetcher(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`))

    return {isLoading}
}



// top rated movies

export const GetTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMoviesFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getTopRatedMovies(data));
            return data;

        } catch (error) {
            return error
        }
    }

    const page = useSelector((state) => state.topRatedReducer.topRatedMoviePage);

    const {isLoading,data} = useQuery(['topRatedMovies' , page] , () => topRatedMoviesFetcher(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`))

    return {isLoading}

}

// top rated movies

export const GetTopRatedShows = () => {
    const dispatch = useDispatch();

    const topRatedShowsFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getTopRatedShows(data));
            return data;

        } catch (error) {
            return error
        }
    }

    const page = useSelector((state) => state.topRatedReducer.topRatedShowPage);

    const {isLoading,data} = useQuery(['topRatedMovies' , page] , () => topRatedShowsFetcher(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`))

    return {isLoading}

}


// search result


export const GetSearchResult = () => {
    const dispatch = useDispatch();

    const searchResultFetcher = async (url) => {
        // console.log('url is' , url)
        try {
            const {data} = await axios.get(url);
            dispatch(getSearchResult(data));
            return data  
        } catch (error) {
            return error;
        }
    }

    const searchValue = useSelector((state) => state.searchReducer.searchValue)

    const {isLoading} = useQuery(['searchResult' , searchValue] , () => searchResultFetcher(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`))

    return {isLoading}

}


// detail (single movie/show)

export const GetSearchDetails = () => {

    const dispatch = useDispatch();
    
    const detailFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getSingleDetail(data));
            return data;
        } catch (error) {
            return error;
        }
    }

    const mediaTypePresent = useSelector((state) => state.searchReducer.mediaType);
    const currentId = useSelector((state) => state.searchReducer.currentId);
    const mediaType = (mediaTypePresent) ? 'tv' : 'movie';


    const {data, isLoading} = useQuery(['searchDetail' , mediaType, currentId] , () => detailFetcher(`https://api.themoviedb.org/3/${mediaType}/${currentId}?api_key=8c81060054acc48c9a733040d6d7a176&language=en-US`))

    return {data, isLoading};

}

export const GetCastInfo = () => {

    const dispatch = useDispatch();
    
    const castFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getCast(data));
            return data;
        } catch (error) {
            return error;
        }
    }

    const mediaTypePresent = useSelector((state) => state.searchReducer.mediaType);
    const currentIdC = useSelector((state) => state.searchReducer.currentId);
    const mediaTypeC = (mediaTypePresent) ? 'tv' : 'movie';


    const {data, isLoading} = useQuery(['searchDetail' , mediaTypeC, currentIdC] , () => castFetcher(`https://api.themoviedb.org/3/${mediaTypeC}/${currentIdC}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`))

    return {data, isLoading};

}