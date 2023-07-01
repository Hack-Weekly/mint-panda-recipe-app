import { Router } from "express";
import * as ingredientsController from './ingredients.controller'
import { wrapper } from "../../middlewares/wrapper";
export const ingredientsRouter = Router();

ingredientsRouter.get("/", wrapper(ingredientsController.getIngredients));
ingredientsRouter.get("/:id", wrapper(ingredientsController.getIngredientById));
ingredientsRouter.post("/", wrapper(ingredientsController.addIngredients));
ingredientsRouter.patch("/:id", wrapper(ingredientsController.updateIngredients));
ingredientsRouter.delete("/:id", wrapper(ingredientsController.deleteIngredients));