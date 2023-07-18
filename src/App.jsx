import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TranslationService } from "./screens/TranslationService";
import { IphoneProMax } from "./screens/IphoneProMax";
import { IphoneProMaxScreen } from "./screens/IphoneProMaxScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <TranslationService />,
  },
  {
    path: "/translation-service-3",
    element: <TranslationService />,
  },
  {
    path: "/iphone-14-pro-max-1",
    element: <IphoneProMax />,
  },
  {
    path: "/iphone-14-pro-max-2",
    element: <IphoneProMaxScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
