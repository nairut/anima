import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Frame } from "./screens/Frame";
import { FrameScreen } from "./screens/FrameScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Frame />,
  },
  {
    path: "/frame-9",
    element: <Frame />,
  },
  {
    path: "/frame-16-all-breakpoints",
    element: <FrameScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
