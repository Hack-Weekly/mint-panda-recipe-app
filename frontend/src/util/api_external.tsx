import axios from "axios"

interface ExternalRecipe {
  title: string,
  ingredients: string,
  servings: string,
  instructions: string
}

export const searchRecipe = async ({ query }: { query: string }) => {
  const token = "your token";
  await axios.get<ExternalRecipe[]>(encodeURI(`https://api.api-ninjas.com/v1/recipe?query=${query}`,), {
    headers: {
      'X-Api-Key': `${token}`
    }
  }).then(response => {
    console.log(response)
  }).catch(err => console.log(err))
}

