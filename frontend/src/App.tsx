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