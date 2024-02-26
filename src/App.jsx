import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Resorts } from "./pages/Resorts/Resorts";
import { GuestHouses } from "./pages/GuestHouses/GuestHouses";
import { AlimathaSummary } from "./pages/AlimathaSummary/AlimathaSummary";
import { DhiggiriSummary } from "./pages/DhiggiriSummary/DhiggiriSummary";
import { MaayaafushiSummary } from "./pages/MaayaafushiSummary/MaayaafushiSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resorts",
    element: <Resorts />,
  },
  {
    path: "/guest-houses",
    element: <GuestHouses />,
  },
  {
    path: "/nakai-alimatha",
    element: <AlimathaSummary />,
  },
  {
    path: "/nakai-dhiggiri",
    element: <DhiggiriSummary />,
  },
  {
    path: "/nakai-maayaafushi",
    element: <MaayaafushiSummary />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
