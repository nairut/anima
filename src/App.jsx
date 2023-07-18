import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Element } from "./screens/Element";
import { TranslationService } from "./screens/TranslationService";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Element />,
  },
  {
    path: "/1501",
    element: <Element />,
  },
  {
    path: "/translation-service",
    element: <TranslationService />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
