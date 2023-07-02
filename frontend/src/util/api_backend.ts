import axios from "axios"
import { dummyRecipe, dummyRecipeList } from "./dummy"

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

export const updateRecipe = async () => {
  // TODO: UPDATE LIKES
  return null
}
