import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Z } from "./screens/Z";
import { Celular } from "./screens/Celular";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Z />,
  },
  {
    path: "/z",
    element: <Z />,
  },
  {
    path: "/*",
    element: <Celular />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
