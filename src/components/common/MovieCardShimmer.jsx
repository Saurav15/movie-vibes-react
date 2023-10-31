import React from "react";

function MovieCardShimmer() {
  return (
    <div className="w-36 hover:cursor-pointer md:w-48 mr-4">
      <div className="rounded-md w-15 h-56 bg-gray-500 animate-pulse" alt="Movie Card" />
    </div>
  );
}

export default MovieCardShimmer;
