import { getRecipe } from "../../util/api_backend"
import { Params } from 'react-router-dom';
import { defer } from "react-router-dom";

export const loader = async ({ params }: { params: Params }) => {
  if (params.id) {
    const recipeId = params.id;
    return defer({ recipe: getRecipe(recipeId) });
  } else {
    throw new Error("URL parameter is empty")
  }
}