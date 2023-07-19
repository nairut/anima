import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopForm } from "./screens/DesktopForm";
import { Index } from "./screens/Index";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Index />,
  },
  {
    path: "/desktop-form",
    element: <DesktopForm />,
  },
  {
    path: "/index",
    element: <Index />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
