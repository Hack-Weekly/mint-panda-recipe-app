import { getIngredients, getTags } from "../../util/api_backend"

export const loader = async () => {
  return {
    ingredients: await getIngredients(),
    tags: await getTags()
  }
}