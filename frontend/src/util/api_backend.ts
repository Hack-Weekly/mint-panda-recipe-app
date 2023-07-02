import { dummyRecipe } from "./dummy"
import axios from "axios"
axios.defaults.withCredentials = true;

const API_ROOT = "http://localhost:5000"

export const getRecipes = async () => {
  const response = await axios.get(`${API_ROOT}/api/recipes`, {
    withCredentials: true
  })
  console.log(response.data)
  return response.data
}

export const getRecipe = async (id: string) => {
  return dummyRecipe // TODO
}

export const updateRecipe = async () => {
  // TODO: UPDATE LIKES
  return null
}
