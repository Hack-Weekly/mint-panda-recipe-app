import { useActionData, useLoaderData } from "react-router-dom"
import RecipeForm from "../../components/recipe/RecipeForm"
import { ErrorMessage, Ingredient, Tag } from "../../interfaces"

export interface AllIngredientsTags {
  ingredients: Ingredient[],
  tags: Tag[]
}

const NewRecipe = () => {
  const ingredientsTagsData = useLoaderData() as AllIngredientsTags
  const errorMessage = useActionData() as ErrorMessage

  return (
    <>
      <RecipeForm ingredientsData={ingredientsTagsData.ingredients} tagsData={ingredientsTagsData.tags} errorMessage={errorMessage} />
    </>
  )
}

export default NewRecipe