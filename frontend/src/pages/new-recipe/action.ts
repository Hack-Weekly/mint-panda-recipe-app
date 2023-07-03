import { saveRecipe } from "../../util/api_backend";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  // "1,2 , 3, 4 , a a,     2 ,,,,," -> ["1","2","3","4", "a a", "2"] -> ["1","2","3","4", "a a"]
  // const tagsString: string = formData.get("tags") as string
  // const tagsList: string[] = tagsString.split(/\s*,\s*/).filter(Boolean)
  // const tagsNoDuplicate: string[] = [...new Set(tagsList)]

  const amountsList = formData.getAll("amount")
  const ingredientsIdList = formData.getAll("ingredients")
  const hashSet = new Set() // used to filter ingredients duplicates
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

  const recipe = {
    title: formData.get("title") as string,
    imageUrl: formData.get("imageurl") as string,
    serving: Number(formData.get("serving")),
    instruction: formData.get("instruction") as string,
    tags: [], // backend not set up
    ingredients: amountsIngredientsIdPair
  }

  const response = await saveRecipe(recipe)

  console.log(response)
  // TODO: redirect to created id of new recipe, /recipes/:id
  // response.data.message = `Created with Id: '${result.id}'
  // extract result.id
  // const resultId = response.message.match(/'([^']+)'/)?.[1]?.trim();

  return redirect("/");
}