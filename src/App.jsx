import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TranslationService } from "./screens/TranslationService";
import { Celular } from "./screens/Celular";
import { TranslationServiceScreen } from "./screens/TranslationServiceScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Celular />,
  },
  {
    path: "/translation-service-2",
    element: <TranslationService />,
  },
  {
    path: "/celular",
    element: <TranslationService />,
  },
  {
    path: "/translation-service",
    element: <TranslationServiceScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
