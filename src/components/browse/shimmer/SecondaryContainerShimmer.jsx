import MovieCarouselShimmer from './MovieCarouselShimmer'

function SecondaryContainerShimmer() {
  return (
    <div className="bg-black pb-14">
      <div className="relative -mt-72 z-20">
        <MovieCarouselShimmer />
        <MovieCarouselShimmer />
        <MovieCarouselShimmer />
        <MovieCarouselShimmer />
      </div>
    </div>
  )
}

export default SecondaryContainerShimmer;