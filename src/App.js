import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { Movie } from "./pages/movie";

import Shows from "./pages/shows";
import MovieFullCrew from "./pages/movie-full-crew";
import TvShowFullCrew from "./pages/tvShow-full-crew";

import MovieList from "./pages/movie-list";
import Cast from "./pages/cast";
import People from "./pages/people";
import TvShowList from "./pages/show-list";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tvShow/:tvId" element={<Shows />} />
            <Route path="/people" element={<People />} />
            <Route path="/movie-list" element={<MovieList />} />
            <Route path="/tv-show-list" element={<TvShowList />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/cast/:castId" element={<Cast />} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="movie/:movieId/crew" element={<MovieFullCrew />} />
            <Route path="tvShow/:tvId/crew" element={<TvShowFullCrew />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default App;
