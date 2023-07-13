import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./screens/Index";
import { ThankYou } from "./screens/ThankYou";
import { Desktop } from "./screens/Desktop";

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
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "/desktop-1",
    element: <Desktop />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
