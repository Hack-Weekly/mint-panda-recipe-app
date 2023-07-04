import { useLoaderData } from "react-router-dom"
import RecipeForm from "../../components/recipe/RecipeForm"
import { Ingredient, Tag } from "../../interfaces"

export interface AllIngredientsTags {
  ingredients: Ingredient[],
  tags: Tag[]
}

const NewRecipe = () => {
  const ingredientsTagsData = useLoaderData() as AllIngredientsTags
  
  return (
    <>
      <RecipeForm ingredientsData={ingredientsTagsData.ingredients} tagsData={ingredientsTagsData.tags} />
    </>
  )
}

export default NewRecipe