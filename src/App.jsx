import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopForm } from "./screens/DesktopForm";
import { Celular } from "./screens/Celular";

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
    path: "/celular-all-breakpoints",
    element: <Celular />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
