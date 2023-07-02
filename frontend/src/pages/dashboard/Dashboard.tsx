import Sidebar from "../../components/Sidebar"
import DashboardComponent from "../../components/DashboardComponent"
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
  const recipesData = useLoaderData()

  return (
    <>
      <Sidebar />
      <DashboardComponent recipesData={recipesData} />
    </>
  )
}

export default Dashboard
