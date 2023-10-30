import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

//check user role to let him access all the children routes of this protected route by returning outlet
// If role not match its unauthourized or user not logged in.
// Check if user object exists in auth redux.
// If yes then throw unauthorized.
// If no then redirect to login

function ProtectedRoute() {
  const user = useSelector((state) => state.user);
  
  return(
    user ? <Outlet /> : <Navigate to={'/login'} replace/>
  );
}

export default ProtectedRoute;
