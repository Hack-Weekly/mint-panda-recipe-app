import { useLoaderData } from "react-router-dom"
import RecipeForm from "../../components/recipe/RecipeForm"
import { Ingredient } from "../../interfaces"

const NewRecipe = () => {
  const ingredientsData = useLoaderData() as Ingredient[]

  return (
    <>
      <RecipeForm ingredientsData={ingredientsData} />
    </>
  )
}

export default NewRecipe