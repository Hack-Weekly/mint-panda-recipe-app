import { RecipePost } from "../../interfaces";
import { saveRecipe } from "../../util/api_backend";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  // filter duplicate and empty tags, then map to object
  let hashSet = new Set() // used to filter ingredients duplicates
  const tagsList = formData.getAll("tags").filter(tag => {
    if (hashSet.has(tag)) return false
    hashSet.add(tag)
    return tag
  }).map(tag => ({
    id: tag as string
  }))

  // maps amount and ingredient as a tuple pair, then filters duplicate and empty pairs
  const amountsList = formData.getAll("amount")
  const ingredientsIdList = formData.getAll("ingredients")
  hashSet = new Set()
  const amountsIngredientsIdPair = amountsList.map((amount, index) => {
    return {
      id: ingredientsIdList[index] as string,
      amount: Number(amount)
    }
  }).filter(pair => {
    if (hashSet.has(pair.id)) return false
    hashSet.add(pair.id)
    return pair.id && pair.amount
  })

  const recipe: RecipePost = {
    title: formData.get("title") as string,
    imageUrl: formData.get("imageurl") as string,
    serving: Number(formData.get("serving")),
    instruction: formData.get("instruction") as string,
    tags: tagsList,
    ingredients: amountsIngredientsIdPair
  }

  console.log(recipe)

  const response = await saveRecipe(recipe)

  console.log(response)

  // TODO: redirect to created id of new recipe, /recipes/:id
  // response.data.message = `Created with Id: '${result.id}'
  // extract result.id
  // const resultId = response.message.match(/'([^']+)'/)?.[1]?.trim();

  return redirect("/");
}