
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Notes from "./routes/tools/Notes";
import Dashboard from "./routes/Dashboard";
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
    ], 
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);