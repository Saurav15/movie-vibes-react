import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function Body() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Body;
