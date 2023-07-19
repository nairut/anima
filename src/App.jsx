import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopForm } from "./screens/DesktopForm";
import { Celular } from "./screens/Celular";
import { CellForm } from "./screens/CellForm";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Celular />,
  },
  {
    path: "/desktop-form",
    element: <DesktopForm />,
  },

  {
    path: "/cell-form",
    element: <CellForm />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
