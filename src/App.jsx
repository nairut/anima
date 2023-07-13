import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./screens/Index";
import { Desktop } from "./screens/Desktop";
import { DesktopScreen } from "./screens/DesktopScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Index />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/desktop-1",
    element: <Desktop />,
  },
  {
    path: "/desktop",
    element: <DesktopScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
