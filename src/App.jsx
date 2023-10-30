import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Body, LoginSignUp, ProtectedRoute } from "./components/index";
import BrowsePage from './pages/BrowsePage'
import "./config/firebase";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MovieCatalogPage from "./pages/MovieCatalogPage";

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
          path: '/signup',
          element: <LoginSignUp />,
        },
        {
          path: "/",
          element: <ProtectedRoute />,
          children: [
            {
              path: '/browse',
              element: <BrowsePage />
            },
            {
              path: '/movies/:type',
              element: <MovieCatalogPage />,
            }
          ]
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
