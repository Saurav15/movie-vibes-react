import MovieCardShimmer from "../../common/MovieCardShimmer";

function MovieCarouselShimmer() {
  return (
    <>
      <div className="ml-20 mb-8">
        <div className="flex items-center">
          <h2
            className="text-white ml-1 mb-4 text-2xl w-1/6 h-12 bg-gray-500 bg-opacity-50 animate-pulse rounded-md"
          >
          </h2>
        </div>

        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
            <MovieCardShimmer />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCarouselShimmer;
