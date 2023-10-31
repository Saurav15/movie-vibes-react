import { useSelector } from "react-redux";

/**
 * Custom React hook to check if the user is authenticated.
 *
 * @returns {boolean} True if the user is authenticated, false otherwise.
 */
export const useIsAuthenticated = () => {
  const user = useSelector((state) => state.user);

  if (user) {
    // User is authenticated.
    return true;
  }
  
  // User is not authenticated.
  return false;
};
