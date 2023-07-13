import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameScreen } from "./screens/FrameScreen";
import { Frame } from "./screens/Frame";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrameScreen />,
  },
  {
    path: "/frame-1",
    element: <FrameScreen />,
  },
  {
    path: "/frame-2",
    element: <Frame />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
