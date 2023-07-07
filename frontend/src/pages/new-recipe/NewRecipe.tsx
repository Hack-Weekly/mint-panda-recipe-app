import { useActionData, useLoaderData, useNavigation, Await } from "react-router-dom"
import RecipeForm from "../../components/recipe/RecipeForm"
import { ErrorMessage, Ingredient, Tag } from "../../interfaces"
import { Suspense } from "react"
import Loading from "../../components/Loading"

export interface AllIngredientsTags {
  ingredients: Ingredient[],
  tags: Tag[]
}

const NewRecipe = () => {
  const ingredientsTagsData = useLoaderData() as { ingredientsTags: AllIngredientsTags }
  const errorMessage = useActionData() as ErrorMessage
  const navigation = useNavigation()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={ingredientsTagsData.ingredientsTags}
        >
          {(resolvedPromise) => <RecipeForm ingredientsData={resolvedPromise.ingredients} tagsData={resolvedPromise.tags} errorMessage={errorMessage} submitting={navigation.state === "submitting"} />}
        </Await>
      </Suspense>
    </>
  )
}

export default NewRecipe