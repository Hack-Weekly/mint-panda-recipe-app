import './App.css'
import RecipeForm from './components/recipe/RecipeForm.tsx'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import SingleRecipe from './components/single-recipe/SingleRecipe.tsx'
import tags from './components/single-recipe/tags.tsx'

function App() {
  return (
    <>
      <Header />
      {/* <RecipeForm/> */}
      {/* <Sidebar /> */}
      <SingleRecipe/>
    </>
  )
}

export default App
