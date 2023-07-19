import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopForm } from "./screens/DesktopForm";
import { Tablet } from "./screens/Tablet";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DesktopForm />,
  },
  {
    path: "/desktop-form-all-breakpoints",
    element: <DesktopForm />,
  },
  {
    path: "/tablet-2",
    element: <Tablet />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
