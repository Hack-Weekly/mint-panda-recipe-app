import Sidebar from "../../components/Sidebar"
import DashboardComponent from "../../components/DashboardComponent"
import { useLoaderData } from 'react-router-dom';
import { RecipeList } from "../../interfaces";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getRecipes, like, unlike } from "../../util/api_backend"

const Dashboard = () => {
  const recipesData = useLoaderData() as RecipeList
  const [currentRecipesData, setCurrentRecipesData] = useState(recipesData)
  const [likedIdData, setLikedIdData] = useState({})
  const { ref } = useInView({
    delay: 1500,
    onChange: (inView) => {
      const getNextPageData = async () => {
        const { results, pageData } = await getRecipes(Number(currentRecipesData.pageData.page) + 1)
        setCurrentRecipesData({
          results: [...currentRecipesData.results, ...results],
          pageData: pageData
        })
      }
      if (inView && currentRecipesData.pageData.hasNextPage) {
        getNextPageData()
      }
    }
  });

  useEffect(() => {
    setLikedIdData(JSON.parse(localStorage.getItem("recipe_likes") || "{}"))
  }, [currentRecipesData])

  const handleLikeUnlike = async (id: string) => {
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
      <DashboardComponent recipeResultsData={currentRecipesData.results} handleLikeUnlike={handleLikeUnlike} likedIdData={likedIdData} />
      <div ref={ref} className="h-20"></div>
    </>
  )
}

export default Dashboard
