import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

/**
 * A protected route component that checks if a user is authenticated.
 * If the user is authenticated, it allows access to the child routes; otherwise, it redirects to the login page.
 *
 * @returns {JSX.Element} JSX element for rendering protected routes.
 */
function ProtectedRoute() {
  // Get the user data from the Redux store
  const user = useSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to={'/login'} replace />;
}

export default ProtectedRoute;
