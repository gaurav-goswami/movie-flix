import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Error from './pages/Error';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import PopularMovies from './pages/popular/PopularMovies';
import PopularTvShows from './pages/popular/PopularTvShows';
import TopRatedMovies from './pages/top rated/TopRatedMovies';
import TopRatedTvShows from './pages/top rated/TopRatedTvShows';
import WatchList from './pages/WatchList';
import UpcomingMovies from './pages/upcoming/UpcomingMovies';
import UpcomingTvShows from './pages/upcoming/UpcomingTvShows';
import SearchResult from './pages/SearchResult';
import SinglePage from './components/SinglePage';

const App = () => {

  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>

          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='movies/upcoming' element={<UpcomingMovies />}/>
              <Route path='tvshows/upcoming' element={<UpcomingTvShows />}/>
              <Route path='movies/popular' element={<PopularMovies />}/>
              <Route path='tvshows/popular' element={<PopularTvShows />}/>
              <Route path='movies/toprated' element = {<TopRatedMovies />}/>
              <Route path='tvshows/toprated' element = {<TopRatedTvShows />}/>
              <Route path='search/:name' element={<SearchResult />}/>
              <Route path= '/:title/view' element={<SinglePage />} />
              <Route path='watchlist' element={<WatchList />}/>

              <Route path='*' element={<Error />}/>
            </Routes>
            <Footer />
          </BrowserRouter>

      </QueryClientProvider>
    </>
  )
}

export default App
