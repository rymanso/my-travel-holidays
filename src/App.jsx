import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Resorts } from "./pages/Resorts/Resorts";
import { GuestHouses } from "./pages/GuestHouses/GuestHouses";
import { AlimathaSummary } from "./pages/Resorts/AlimathaSummary/AlimathaSummary";
import { DhiggiriSummary } from "./pages/Resorts/DhiggiriSummary/DhiggiriSummary";
import { MaayaafushiSummary } from "./pages/Resorts/MaayaafushiSummary/MaayaafushiSummary";
import { AlimathaAccomodation } from "./pages/Resorts/AlimathaSummary/Accomodation/Accomodation";
import { DhiggiriAccomodation } from "./pages/Resorts/DhiggiriSummary/Accomodation/Accomodation";
import { MaayaafushiAccomodation } from "./pages/Resorts/MaayaafushiSummary/Accomodation/Accomodation";
import { AlimathaDining } from "./pages/Resorts/AlimathaSummary/Dining/Dining";
import { DhiggiriDining } from "./pages/Resorts/DhiggiriSummary/Dining/Dining";
import { MaayaafushiDining } from "./pages/Resorts/MaayaafushiSummary/Dining/Dining";
import { AlimathaRecreation } from "./pages/Resorts/AlimathaSummary/Recreation/Recreation";
import { DhiggiriRecreation } from "./pages/Resorts/DhiggiriSummary/Recreation/Recreation";
import { MaayaafushiRecreation } from "./pages/Resorts/MaayaafushiSummary/Recreation/Recreation";
import { RitzCarltonSummary } from "./pages/Resorts/RitzCarltonSummary/RitzCarltonSummary";
import { RitzCarltonAccomodation } from "./pages/Resorts/RitzCarltonSummary/Accomodation/Accomodation";
import { RitzCarltonDining } from "./pages/Resorts/RitzCarltonSummary/Dining/Dining";
import { RitzCarltonRecreation } from "./pages/Resorts/RitzCarltonSummary/Recreation/Recreation";

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
    path: "/resorts/nakai-alimatha",
    element: <AlimathaSummary />,
  },
  {
    path: "/resorts/nakai-alimatha/accomodation",
    element: <AlimathaAccomodation />,
  },
  {
    path: "/resorts/nakai-alimatha/dining",
    element: <AlimathaDining />,
  },
  {
    path: "/resorts/nakai-alimatha/recreation",
    element: <AlimathaRecreation />,
  },
  {
    path: "/resorts/nakai-dhiggiri",
    element: <DhiggiriSummary />,
  },
  {
    path: "/resorts/nakai-dhiggiri/accomodation",
    element: <DhiggiriAccomodation />,
  },
  {
    path: "/resorts/nakai-dhiggiri/dining",
    element: <DhiggiriDining />,
  },
  {
    path: "/resorts/nakai-dhiggiri/recreation",
    element: <DhiggiriRecreation />,
  },
  {
    path: "/resorts/nakai-maayaafushi",
    element: <MaayaafushiSummary />,
  },
  {
    path: "/resorts/nakai-maayaafushi/accomodation",
    element: <MaayaafushiAccomodation />,
  },
  {
    path: "/resorts/nakai-maayaafushi/dining",
    element: <MaayaafushiDining />,
  },
  {
    path: "/resorts/nakai-maayaafushi/recreation",
    element: <MaayaafushiRecreation />,
  },
  {
    path: "/resorts/ritz-carlton",
    element: <RitzCarltonSummary />,
  },
  {
    path: "/resorts/ritz-carlton/accomodation",
    element: <RitzCarltonAccomodation />,
  },
  {
    path: "/resorts/ritz-carlton/dining",
    element: <RitzCarltonDining />,
  },
  {
    path: "/resorts/ritz-carlton/recreation",
    element: <RitzCarltonRecreation />,
  },
  {
    path: "/guest-houses",
    element: <GuestHouses />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
