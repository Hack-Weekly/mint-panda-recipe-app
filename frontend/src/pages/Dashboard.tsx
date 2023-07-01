// import Search from "../components/Search"
import Sidebar from "../components/Sidebar"
import DashboardComponent from "../components/DashboardComponent"

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      {/* Render list of recipe cards here
      <Search /> */}
      <DashboardComponent />
    </>
  )
}

export default Dashboard