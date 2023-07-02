import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../../components/single-recipe/SingleRecipe';


function RecipeDetail() {
  const recipeData = useLoaderData();

  return (
    <>
      <SingleRecipe recipeData={recipeData} />
    </>
  );
}

export default RecipeDetail;

