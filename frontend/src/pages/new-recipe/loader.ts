import { getIngredients } from "../../util/api_backend"

export const loader = () => {
  return getIngredients();
}