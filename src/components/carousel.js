import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card/movie-card";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

export function Carousel(items) {
  console.log(items);
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        slidesPerView={5}
        pagination={{}}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1247: {
            width: 1247,
            slidesPerView: 5,
          },
        }}
      >
        {items?.items?.data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title || movie.name}
              image={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date || movie.first_air_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
