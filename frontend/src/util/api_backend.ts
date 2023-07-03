import axios from "axios"
import { dummyRecipe, dummyRecipeList, dummyIngredientList } from "./dummy"
import { RecipePost } from "../interfaces"

const API_ROOT = "http://localhost:5000"

export const getRecipes = async () => {
  return axios.get(`${API_ROOT}/api/recipes`, {
    withCredentials: true
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error)
      return dummyRecipeList
    })
}

export const getRecipe = async (id: string) => {
  return axios.get(`${API_ROOT}/api/recipes/${id}`, {
    withCredentials: true
  }).then(response => response.data)
    .catch(error => {
      console.log(error)
      return dummyRecipe
    })
}

export const saveRecipe = async (recipe: RecipePost) => {
  return axios.post(`${API_ROOT}/api/recipes`, recipe, {
    withCredentials: true
  }).then(response => response.data)
  // error handled by react router
}

export const updateRecipe = async () => {
  // TODO: UPDATE LIKES
  return null
}

export const getIngredients = async () => {
  return axios.get(`${API_ROOT}/api/ingredients`, {
    withCredentials: true
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error)
      return dummyIngredientList
    })
}