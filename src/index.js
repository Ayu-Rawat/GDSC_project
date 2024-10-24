
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Notes from "./routes/tools/Notes";
import Dashboard from "./routes/Dashboard";
import Linechart from "./routes/charts/Linechart";
import Piechart from "./routes/charts/Piechart";
import Barchart from "./routes/charts/Realtimechart";
import Navbar from "./components/Navbar";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "linechart",
        element: <Linechart />,
      },
      {
        path: "piechart",
        element: <Piechart />,
      },
      {
        path: "barchart",
        element: <Barchart />,
      },
    ], 
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);