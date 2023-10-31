import React from "react";
import { useSelector } from "react-redux";
import MainContainerShimmer from "./shimmer/MainContainerShimmer";

/**
 * A component representing the main container for displaying movie details.
 * @returns {JSX.Element} JSX element for rendering the main container.
 */
function MainContainer() {
  const mainMovie = useSelector((state) => state.movies.mainMovie);

  // If mainMovie is not available, display a shimmer effect.
  if (!mainMovie) return <MainContainerShimmer />;

  const { original_title, overview, video } = mainMovie;

  return (
    <>
      <div className="absolute w-full aspect-video">
        <iframe
          className="w-full aspect-video pointer-events-none"
          src={`https://www.youtube.com/embed/${video.key}?playlist=${video.key}&autoplay=1&mute=1&loop=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="relative w-full aspect-video bg-gradient-to-r from-black">
        <div className="pt-[20%] ml-20">
          <h1 className="text-4xl text-white font-bold">{original_title}</h1>
          <p className="text-white w-5/12 mt-3">{overview}</p>
          <div className="mt-4 flex">
            <button className="bg-white text-black w-36 px-8 py-2 rounded-lg flex items-center justify-center">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.804 17.804"
                className="w-4 h-4 inline mr-2"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g id="c98_play">
                      <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"></path>
                    </g>
                    <g id="Capa_1_78_"> </g>
                  </g>
                </g>
              </svg>
              <span>Play</span>
            </button>

            <button className="bg-gray-500 text-white w-36 bg-opacity-50 px-8 py-2 rounded-lg ml-5">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
