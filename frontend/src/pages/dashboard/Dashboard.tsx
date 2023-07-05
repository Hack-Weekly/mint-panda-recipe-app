import Sidebar from "../../components/Sidebar"
import DashboardComponent from "../../components/DashboardComponent"
import { useLoaderData } from 'react-router-dom';
import { RecipeList } from "../../interfaces";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { getRecipes } from "../../util/api_backend"

const Dashboard = () => {
  const recipesData = useLoaderData() as RecipeList
  const [currentRecipesData, setCurrentRecipesData] = useState(recipesData)
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

  return (
    <>
      <Sidebar />
      <DashboardComponent recipeResultsData={currentRecipesData.results} />
      <div ref={ref} className="h-20"></div>
    </>
  )
}

export default Dashboard
