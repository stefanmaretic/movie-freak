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

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/tv/:tvId" element={<Shows />} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="/movie-full-crew" element={<MovieFullCrew />} />
            <Route path="/tvshow-full-crew" element={<TvShowFullCrew />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default App;
