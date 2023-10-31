import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function Body() {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Body;
