import { useState } from 'react'
import './App.css'
import RecipeForm from './components/recipe/RecipeForm.tsx'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'

function App() {
  const [newRecipeFormClicked, setNewRecipeFormClicked] = useState(false)

  return (
    <>
      <Header />
      {newRecipeFormClicked ?
        <RecipeForm /> :
        <Sidebar />
      }
    </>
  )
}

export default App
