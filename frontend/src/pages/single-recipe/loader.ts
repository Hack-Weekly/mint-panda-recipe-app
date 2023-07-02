import { getRecipe } from "../../util/api_backend"

export const loader = ({ params }) => {
  const recipeId = params.id;
  return getRecipe(recipeId);
}