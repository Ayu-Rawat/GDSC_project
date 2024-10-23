// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Notes from "./routes/tools/Notes";
import Dashboard from "./routes/Dashboard";
import Barchart from "./routes/charts/Barchart";
import Linechart from "./routes/charts/Linechart";
import Piechart from "./routes/charts/Piechart";
import Livechart from "./routes/charts/Realtimechart";
import Contacts from "./routes/data/Contact";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";

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
        path: "contactinfo",
        element: <Contacts />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "barchart",
        element: <Barchart />,
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
        path: "livechart",
        element: <Livechart />,
      },
    ], 
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);