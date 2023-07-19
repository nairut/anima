import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopForm } from "./screens/DesktopForm";
import { Element } from "./screens/Element";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DesktopForm />,
  },
  {
    path: "/desktop-form",
    element: <DesktopForm />,
  },
  {
    path: "/1500",
    element: <Element />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
