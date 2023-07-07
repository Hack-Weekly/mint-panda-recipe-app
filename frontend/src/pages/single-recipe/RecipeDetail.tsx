import { useLoaderData, Await } from 'react-router-dom';
import SingleRecipe from '../../components/single-recipe/SingleRecipe';
import { FullRecipe } from '../../interfaces';
import { useEffect, Suspense } from 'react';
import Loading from '../../components/Loading';

function RecipeDetail() {
  const recipeData = useLoaderData() as { recipe: FullRecipe };

  // scroll top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={recipeData.recipe}
        >
          {(resolvedRecipe) => <SingleRecipe recipeData={resolvedRecipe} />}
        </Await>
      </Suspense >
    </>
  );
}

export default RecipeDetail;

