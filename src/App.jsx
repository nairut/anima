import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Element } from "./screens/Element";
import { Index } from "./screens/Index";
import { ElementScreen } from "./screens/ElementScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Element />,
  },
  {
    path: "/1300",
    element: <Element />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/1500",
    element: <ElementScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
