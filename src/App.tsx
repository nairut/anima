import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Element } from "./screens/Element";
import { ElementScreen } from "./screens/ElementScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Element />,
  },
  {
    path: "/1502",
    element: <Element />,
  },
  {
    path: "/1500-all-breakpoints",
    element: <ElementScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
