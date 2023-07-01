import axios from "axios"

interface ExternalRecipe {
  title: string,
  ingredients: string,
  servings: string,
  instructions: string
}

export const searchRecipe = async ({ query }: { query: string }) => {
  if (query.length === 0) {
    console.log("Search box is empty")
    return
  }

  const token = "your token here";
  await axios.get<ExternalRecipe[]>(encodeURI(`https://api.api-ninjas.com/v1/recipe?query=${query}`,), {
    headers: {
      'X-Api-Key': `${token}`
    }
  }).then(res => console.log(res))
    .catch(err => console.log(err))
}

