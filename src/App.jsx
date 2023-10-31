import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./config/firebase";
import Body from "./components/Body";
import LoginSignUp from "./components/auth/LoginSignUp";
import ProtectedRoute from "./components/auth/ProtectedRoute";
const BrowsePage = lazy(() => import("./pages/BrowsePage"));
const MovieCatalogPage = lazy(() => import("./pages/MovieCatalogPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/login",
          element: <LoginSignUp />,
        },
        {
          path: "/signup",
          element: <LoginSignUp />,
        },
        {
          path: "/",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/browse",
              element: <BrowsePage />,
            },
            {
              path: "/movies/:type",
              element: <MovieCatalogPage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
