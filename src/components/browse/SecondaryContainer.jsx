import React from "react";
import { useSelector } from "react-redux";
import MovieListCarousel from "./MovieCarousel";
import SecondaryContainerShimmer from "./shimmer/SecondaryContainerShimmer";

/**
 * A secondary container component that displays movie carousels.
 *
 * @returns {JSX.Element} JSX element for rendering secondary container.
 */
function SecondaryContainer() {
  const movieCategories = useSelector((state) => state.movies.movieCategories);

  // If movieCategories is empty, display a shimmer effect.
  if(movieCategories.length === 0){
    return <SecondaryContainerShimmer />
  }

  return (
    <div className="bg-black pb-14">
      <div className="relative -mt-72 z-20">
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
