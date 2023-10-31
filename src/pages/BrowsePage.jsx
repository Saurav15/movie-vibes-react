import React from "react";
import MainContainer from "../components/browse/MainContainer";
import SecondaryContainer from "../components/browse/SecondaryContainer";
import { useMainMovie } from "../hooks/useMainMovie";
import { useGetBrowsePageCarouselData } from "../hooks/useFetchBrowsePageMovieLists";

function BrowsePage() {
  useGetBrowsePageCarouselData();
  useMainMovie();

  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
}

export default BrowsePage;
