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
import ContactUs from "./pages/contact-us";
import Privacy from "./pages/privacy";
import TermsOfUse from "./pages/terms-of-use";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/tvShow/:tvId" element={<Shows />} />

            <Route path="/movie-list" element={<MovieList />} />
            <Route path="/movie/:movieId" element={<Movie />} />

            <Route path="about" element={<h1>About</h1>} />
            <Route path="movie/:movieId/crew" element={<MovieFullCrew />} />
            <Route path="tvShow/:tvId/crew" element={<TvShowFullCrew />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default App;
