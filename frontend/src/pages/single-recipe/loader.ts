import { getRecipe } from "../../util/api_backend"
import { Params } from 'react-router-dom';

export const loader = ({ params }: { params: Params }) => {
  if (params.id) {
    const recipeId = params.id;
    return getRecipe(recipeId);
  } else {
    throw new Error("URL parameter is empty")
  }
}