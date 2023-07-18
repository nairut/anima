import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThankYou } from "./screens/ThankYou";
import { Index } from "./screens/Index";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ThankYou />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "/index",
    element: <Index />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
