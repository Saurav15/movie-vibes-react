import React from "react";
import { TMDB_IMAGE_PATH } from "../../config/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-36 hover:cursor-pointer md:w-48 mr-4">
      <img className="rounded-md" alt="Movie Card" src={TMDB_IMAGE_PATH + posterPath} />
    </div>
  );
}

export default MovieCard;
