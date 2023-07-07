import { getRecipes } from "../../util/api_backend"
import { defer } from "react-router-dom";

export const loader = async () => {
  return defer({ recipes: getRecipes() })
}