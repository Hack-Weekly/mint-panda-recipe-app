import axios from "axios"
axios.defaults.withCredentials = true;

const API_ROOT = "http://localhost:5000"

export const getRecipes = async () => {
  const response = await axios.get(`${API_ROOT}/api/recipes`, {
    withCredentials: true
  })
  return response.data
}

export const getRecipe = async (id: string) => {
  const response = await axios.get(`${API_ROOT}/api/recipes/${id}`, {
    withCredentials: true
  })
  return response.data
}

export const updateRecipe = async () => {
  // TODO: UPDATE LIKES
  return null
}
