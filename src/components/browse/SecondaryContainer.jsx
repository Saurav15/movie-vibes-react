import React from "react";
import { useSelector } from "react-redux";
import MovieListCarousel from "./MovieCarousel";

function SecondaryContainer() {
  const movieCategories = useSelector((state) => state.movies.movieCategories);

  return (
    <div className="bg-black pb-14">
      <div className="relative -mt-52 z-20">
        {movieCategories.map(({type,movies}, index) => {
          return (
            movies && (
              <MovieListCarousel
                key={index}
                listType={type}
                movies={movies}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default SecondaryContainer;
