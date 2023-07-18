import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TranslationService } from "./screens/TranslationService";
import { Celular } from "./screens/Celular";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <TranslationService />,
  },
  {
    path: "/translation-service",
    element: <TranslationService />,
  },
  {
    path: "/celular-all-breakpoints",
    element: <Celular />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
