// import DashboardComponent from "./components/dashboard/dashboard.component.tsx";
// import "./App.css";

// function App() {
//   return <DashboardComponent></DashboardComponent>;
// }

// export default App;

import './App.css'
import Navigation from './components/Navigation.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App