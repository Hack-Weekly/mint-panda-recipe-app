import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import RecipeDetail from "./pages/single-recipe/RecipeDetail.tsx";
import { loader as recipesLoader } from "./pages/dashboard/loader.ts";
import { loader as recipeLoader } from "./pages/single-recipe/loader.ts";
import ErrorPage from "./pages/Error.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
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
          element: <RecipeDetail />,
          loader: recipeLoader
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

