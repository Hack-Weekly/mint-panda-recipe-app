import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import SingleRecipe from "./components/single-recipe/SingleRecipe.tsx";
import { loader as recipesLoader } from "./pages/dashboard/loader.ts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: recipesLoader
        },
        {
          path: "/recipe/new",
          element: <NewRecipe />,
        },
        {
          path: "recipe/:id",
          element: <SingleRecipe />
        }
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

