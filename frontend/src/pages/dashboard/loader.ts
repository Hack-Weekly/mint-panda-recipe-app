import { getRecipes } from "../../util/api_backend"

export function loader() {
  return getRecipes();
}