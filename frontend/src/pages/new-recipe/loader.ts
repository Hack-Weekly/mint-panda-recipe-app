import { getIngredients, getTags } from "../../util/api_backend"
import { defer } from "react-router-dom"

export const loader = async () => {
  return defer({
    ingredientsTags: Promise.all([getIngredients(), getTags()]).then(([ingredients, tags]) => ({ ingredients, tags }))
  })
}