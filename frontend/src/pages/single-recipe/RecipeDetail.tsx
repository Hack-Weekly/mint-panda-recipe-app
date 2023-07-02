import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../../components/single-recipe/SingleRecipe';
import { FullRecipe } from '../../interfaces';

function RecipeDetail() {
  const recipeData = useLoaderData() as FullRecipe;

  return (
    <>
      <SingleRecipe recipeData={recipeData} />
    </>
  );
}

export default RecipeDetail;

