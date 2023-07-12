import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Element } from "./screens/Element";
import { ElementScreen } from "./screens/ElementScreen";
import { IphoneProMax } from "./screens/IphoneProMax";
import { ElementWrapper } from "./screens/ElementWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Element />,
  },
  {
    path: "/1502",
    element: <Element />,
  },
  {
    path: "/1500",
    element: <ElementScreen />,
  },
  {
    path: "/iphone-14-pro-max-1",
    element: <IphoneProMax />,
  },
  {
    path: "/1501",
    element: <ElementWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
