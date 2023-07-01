import { Router } from "express";
import * as recipesController from './recipes.controller' 
import { wrapper } from "../../middlewares/wrapper";
export const recipesRouter = Router();

recipesRouter.get("/", wrapper(recipesController.getRecipes));
recipesRouter.get("/:id", wrapper(recipesController.getRecipesById));
recipesRouter.post("/", wrapper(recipesController.addRecipe));
recipesRouter.delete("/:id", wrapper(recipesController.deleteRecipeById));