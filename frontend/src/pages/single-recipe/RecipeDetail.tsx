import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../../components/single-recipe/SingleRecipe';
import { FullRecipe } from '../../interfaces';
import { useEffect } from 'react';

function RecipeDetail() {
  const recipeData = useLoaderData() as FullRecipe;
  
  // scroll top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SingleRecipe recipeData={recipeData} />
    </>
  );
}

export default RecipeDetail;

