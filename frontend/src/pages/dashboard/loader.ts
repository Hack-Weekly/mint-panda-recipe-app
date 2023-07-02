import { getRecipes } from "../../util/api_backend"

export const loader = () => {
  return getRecipes();
}