import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/recipe/new",
          element: <NewRecipe />,
        },
      ],
    },
  ],
  {
    basename: "/mint-panda-recipe-app/",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

