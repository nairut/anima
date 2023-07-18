import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TranslationService } from "./screens/TranslationService";
import { Celular } from "./screens/Celular";

const router = createBrowserRouter([

  {
    path: "/translation-service-2-all-breakpoints",
    element: <TranslationService />,
  },
  {
    path: "/*",
    element: <Celular />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
