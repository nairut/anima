import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TranslationService } from "./screens/TranslationService";
import { IphoneProMax } from "./screens/IphoneProMax";
import { TranslationServiceScreen } from "./screens/TranslationServiceScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <TranslationService />,
  },
  {
    path: "/translation-service-2",
    element: <TranslationService />,
  },
  {
    path: "/iphone-14-pro-max-1",
    element: <IphoneProMax />,
  },
  {
    path: "/translation-service",
    element: <TranslationServiceScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
