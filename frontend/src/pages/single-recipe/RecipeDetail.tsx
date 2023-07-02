import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../../components/single-recipe/SingleRecipe';
import { SingleRecipe as SingleRecipeInterface } from '../../interfaces';

function RecipeDetail() {
  const recipeData = useLoaderData() as SingleRecipeInterface;

  return (
    <>
      <SingleRecipe recipeData={recipeData} />
    </>
  );
}

export default RecipeDetail;

