import { useState } from 'react'
import './App.css'
import RecipeForm from './components/recipe/RecipeForm.tsx'
import Header from './components/Header.tsx'

function App() {

  return (
    <>
      <Header />
      <RecipeForm />
    </>
  )
}

export default App
