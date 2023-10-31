import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../common/MovieCard";

/**
 * A component to display a carousel of movies.
 *
 * @param {Object} props - Component props.
 * @param {string} props.listType - The type of movie list.
 * @param {Array} props.movies - An array of movie data.
 * @returns {JSX.Element} JSX element for rendering a movie carousel.
 */
function MovieCarousel({ listType, movies }) {
  const navigate = useNavigate();

  /**
   * Handle the click event when the movie list title is clicked.
   * Navigates to the corresponding movie list page.
   */
  const handleMovieListClick = () => {
    navigate(`/movies/${listType}`);
  };

  return (
    <>
      <div className="ml-20 mb-8">
        <div className="flex items-center">
          <h2
            className="text-white ml-1 mb-4 text-2xl hover:cursor-pointer hover:-translate-y-[2px]"
            onClick={handleMovieListClick}
          >
            {listType}
          </h2>
        </div>

        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            {movies.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCarousel;
