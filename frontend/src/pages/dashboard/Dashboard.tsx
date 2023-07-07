import Sidebar from "../../components/Sidebar"
import DashboardComponent from "../../components/DashboardComponent"
import { useLoaderData, Await } from 'react-router-dom';
import { RecipeList } from "../../interfaces";
import { useEffect, useState, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { getRecipes, like, unlike } from "../../util/api_backend"
import { dummyRecipeList } from "../../util/dummy";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const recipesData = useLoaderData() as { recipes: RecipeList }
  const [currentRecipesData, setCurrentRecipesData] = useState(dummyRecipeList)
  const [likedIdData, setLikedIdData] = useState({})
  const { ref, inView } = useInView();
  const [isFulfilled, setIsFulfilled] = useState(false)

  useEffect(() => {
    const getNextPageData = async () => {
      const { results, pageData } = await getRecipes(Number(currentRecipesData.pageData.page) + 1)
      setCurrentRecipesData({
        results: [...currentRecipesData.results, ...results],
        pageData: pageData
      })
    }
    if (inView && isFulfilled && currentRecipesData.pageData.hasNextPage) {
      getNextPageData()
    }
    // We only need to fetch recipes when div at the bottom is viewed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedRecipesData = await recipesData.recipes;
      setCurrentRecipesData(resolvedRecipesData);
      setIsFulfilled(true)
    };

    fetchData();
  }, [recipesData]);

  useEffect(() => {
    setLikedIdData(JSON.parse(localStorage.getItem("recipe_likes") || "{}"))
  }, [currentRecipesData])

  const handleLikeUnlike = async (id?: string) => {
    if (!id) return console.log("id is undefined");

    const handleLike = (liked: boolean) => {
      const updatedRecipeResults = currentRecipesData.results.map((recipe) => {
        if (recipe.id === id) {
          return { ...recipe, like: liked ? recipe.like + 1 : recipe.like - 1 }
        }
        return recipe
      })
      setCurrentRecipesData({
        results: updatedRecipeResults,
        pageData: { ...currentRecipesData.pageData }
      });
    };

    const recipelikes = JSON.parse(localStorage.getItem("recipe_likes") || "{}")
    const isLiked = recipelikes[id];

    if (isLiked) {
      await unlike(id);
      recipelikes[id] = false;
    } else {
      await like(id);
      recipelikes[id] = true;
    }

    localStorage.setItem("recipe_likes", JSON.stringify(recipelikes));
    handleLike(!isLiked)
  }

  return (
    <>
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Await
          resolve={recipesData.recipes}
        >
          {() => <DashboardComponent recipeResultsData={currentRecipesData.results} handleLikeUnlike={handleLikeUnlike} likedIdData={likedIdData} />}
        </Await>
      </Suspense>
      <div ref={ref} className="h-20"></div>
    </>
  )
}

export default Dashboard
