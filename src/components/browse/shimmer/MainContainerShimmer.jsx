/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function MainContainerShimmer() {
  return (
    <>
      <div className="absolute w-full aspect-video">
        <div className="w-full aspect-video pointer-events-none bg-gray-400 animate-pulse"></div>
      </div>
      <div className="relative w-full aspect-video bg-gradient-to-r from-black">
        <div className="pt-[20%] ml-20">
          <h1 className="w-3/12 mb-4 h-10 animate-pulse bg-gray-500 bg-opacity-50 rounded-md"></h1>
          <p className="leading-relaxed mb-3 w-4/12 h-2.5 animate-pulse bg-gray-400 bg-opacity-30 rounded-md"></p>
          <p className="leading-relaxed mb-3 w-3/12 h-2.5 animate-pulse bg-gray-400 bg-opacity-30 rounded-md"></p>
          <p className="leading-relaxed mb-3 w-2/12 h-2.5 animate-pulse bg-gray-400 bg-opacity-30 rounded-md"></p>
          <div className="mt-4 flex">
            <button className="bg-indigo-300 w-36 h-10 bg-opacity-30 animate-pulse rounded-lg"></button>

            <button className="bg-indigo-300 h-10 w-36 bg-opacity-30 animate-pulse rounded-lg ml-5"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainerShimmer;
