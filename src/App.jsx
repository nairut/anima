import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { ThankYou } from "./screens/ThankYou";
import { NewProject } from "./screens/Desktop";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Desktop />,
  },
  {
    path: "/desktop-1",
    element: <Desktop />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },

  {
    path: "/turian",
    element: <NewProject />,
  },


]);

export const App = () => {
  return <RouterProvider router={router} />;
};
