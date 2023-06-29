import { useState } from 'react'
import './App.css'
import RecipeForm from './components/recipe/RecipeForm.tsx'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'

function App() {

  return (
    <>
      <Header />
      {/* <RecipeForm /> */}
      <Sidebar />
    </>
  )
}

export default App
