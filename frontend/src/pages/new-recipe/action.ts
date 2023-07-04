import { RecipePost } from "../../interfaces";
import { saveRecipe } from "../../util/api_backend";
import { redirect, json } from "react-router-dom";
import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import { Validator, size, string, define, object, min, number, array, assert, StructError, nonempty } from "superstruct";

const uuidValidateV4: Validator = (uuid: unknown) => {
  if (typeof uuid === "string")
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
  return false
}

const Uuid = define("Uuid", uuidValidateV4)

const RecipeSchema = object({
  title: size(string(), 1, 70),
  imageUrl: nonempty(string()),
  serving: min(number(), 0, { exclusive: true }),
  instruction: size(string(), 8, 300),
  tags: nonempty(array(object({
    id: Uuid || size(string(), 1, 30)
  }))),
  ingredients: nonempty(array(object({
    id: Uuid || size(string(), 1, 30),
    amount: min(number(), 0, { exclusive: true })
  })))
})

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const title = formData.get("title") as string
  const imageurl = formData.get("imageurl") as string
  const serving = Number(formData.get("serving"))
  const instruction = formData.get("instruction") as string

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
    title: title,
    imageUrl: imageurl,
    serving: serving,
    instruction: instruction,
    tags: tagsList,
    ingredients: amountsIngredientsIdPair
  }

  try {
    assert(recipe, RecipeSchema);
  } catch (err) {
    if (err instanceof StructError) {
      const inputErrors = err.failures().reduce(
        (acc, { key, message }) => ({
          ...acc,
          [key]: message,
        }),
        {}
      );
      return json(inputErrors);
    }
  }

  console.log(recipe)

  // const response = await saveRecipe(recipe)

  // console.log(response)

  // TODO: redirect to created id of new recipe, /recipes/:id
  // response.data.message = `Created with Id: '${result.id}'
  // extract result.id
  // const resultId = response.message.match(/'([^']+)'/)?.[1]?.trim();

  return redirect("/");
}