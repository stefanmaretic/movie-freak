import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "./movie-card";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const defaultBreakpoints = {
  375: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1247: { slidesPerView: 5 },
};

export function Carousel({
  items = {},
  navigation = true,
  spaceBetween = 30,
  slidesPerView = 5,
  pagination = false,
  breakpoints = defaultBreakpoints,
}) {
  return (
    <>
      <Swiper
        navigation={navigation}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={pagination}
        breakpoints={breakpoints}
      >
        {items?.data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard
                title={movie.title || movie.name}
                image={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date || movie.first_air_date}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
