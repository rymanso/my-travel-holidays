import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Resorts } from "./pages/Resorts/Resorts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resorts",
    element: <Resorts />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
