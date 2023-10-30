import React, { useMemo } from "react";
import MainContainer from "../components/browse/MainContainer";
import SecondaryContainer from "../components/browse/SecondaryContainer";
import { useMainMovie } from "../hooks/useMainMovie";
import { useGetBrowsePageCarouselData } from "../hooks/useFetchBrowsePageMovieLists";

function BrowsePage() {
  const secondaryContainer = useGetBrowsePageCarouselData();
  const mainContainer = useMainMovie()

  return (
    <>
      {mainContainer.loading ? <div className="text-3xl text-red-500">Loading </div> : <MainContainer />}
      {secondaryContainer.loading ? <div className="text-3xl text-red-500">Loading</div> : <SecondaryContainer />}
    </>
  );
}

export default BrowsePage;
