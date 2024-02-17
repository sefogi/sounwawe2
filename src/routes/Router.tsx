import { createBrowserRouter } from "react-router-dom";
import { Layoud } from "../components/Layoud";
import {Home} from "../pages/home/Home";
import { Discover } from "../pages/discover/Discover";
import { Join } from "../pages/join/Join";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoud />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Discover",
        element: <Discover />,
      },
      {
        path: "/Join",
        element: <Join />,
      },
    ],
  },
]);
