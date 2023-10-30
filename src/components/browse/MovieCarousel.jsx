
import { useNavigate } from "react-router-dom";
import MovieCard from "../common/MovieCard";

function MovieCarousel({ listType, movies }) {
  const navigate = useNavigate(); 

  const handleMovieListClick = () => {
    navigate(`/movies/${listType}`)  
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
