import Sidebar from "../../components/Sidebar"
import DashboardComponent from "../../components/DashboardComponent"
import { useLoaderData } from 'react-router-dom';
import { RecipeList } from "../../interfaces";

const Dashboard = () => {
  const recipesData = useLoaderData() as RecipeList

  return (
    <>
      <Sidebar />
      <DashboardComponent recipesData={recipesData} />
    </>
  )
}

export default Dashboard
