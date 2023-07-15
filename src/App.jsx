import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Frame } from "./screens/Frame";
import { Desktop } from "./screens/Desktop";
import { ThankYou } from "./screens/ThankYou";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Frame />,
  },
  {
    path: "/frame-1",
    element: <Frame />,
  },
  {
    path: "/desktop-1",
    element: <Desktop />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
