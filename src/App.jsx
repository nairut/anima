import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Element } from "./screens/Element";
import { Celular } from "./screens/Celular";

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
    path: "/celular",
    element: <Celular />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
