import React, { useState } from "react";
import { CONSTANTS } from "../../config/constants";

/**
 * A component representing a movie card with a poster image.
 *
 * @param {string} posterPath - The path to the movie's poster image.
 * @returns {JSX.Element} JSX element for rendering the movie card.
 */
function MovieCard({ posterPath }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  /**
   * Callback function to handle image load completion.
   */
  const handleOnLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <div className="w-36 hover:cursor-pointer md:w-48 mr-4">
      <img
        className={`rounded-md w-full h-full ${
          isImageLoading ? "w-56 h-72 bg-gray-500 animate-pulse" : ""
        }`}
        alt="Movie Card"
        src={CONSTANTS.TMDB_IMAGE_PATH + posterPath}
        loading="lazy"
        onLoad={handleOnLoad}
      />
    </div>
  );
}

export default MovieCard;
