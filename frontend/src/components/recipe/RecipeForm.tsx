import { Form } from "react-router-dom"
import { Ingredient } from "../../interfaces"
import { useEffect, useState } from "react"
import CreatableSelect from "react-select/creatable"

interface IngredientList {
  ingredientsData: Ingredient[]
}

interface IngredientOption {
  readonly value: string,
  readonly label: string
}

interface IngredientInput {
  amount: string,
  ingredients: IngredientOption
}

interface InputEvent {
  name: string,
  value: string | IngredientOption | null
}

const RecipeForm = ({ ingredientsData }: IngredientList) => {
  const [ingredients, setIngredients] = useState<readonly IngredientOption[]>([])
  const [ingredientsInput, setIngredientsInput] = useState<IngredientInput[]>([{ amount: "", ingredients: { value: "", label: "" } }])

  useEffect(() => {
    setIngredients(ingredientsData.map(ingredientData => ({ value: ingredientData["id"], label: ingredientData["name"] })))
  }, [ingredientsData])

  const handleIngredientsInputChange = (index: number, event: InputEvent) => {
    const data: IngredientInput[] = [...ingredientsInput]
    if (event.name === "amount" && typeof event.value === "string") {
      data[index].amount = event.value
    } else if (event.name === "ingredients") {
      if (event.value === null) {
        data[index].ingredients = { value: "", label: "" };
      } else {
        data[index].ingredients = event.value as IngredientOption;
      }
    }
    setIngredientsInput(data)
  }

  const addIngredientInput = () => {
    const newInput = { amount: "", ingredients: { value: "", label: "" } }
    setIngredientsInput([...ingredientsInput, newInput])
  }

  const removeIngredientInput = (index: number) => {
    if (ingredientsInput.length === 1) {
      setIngredientsInput([{ amount: "", ingredients: { value: "", label: "" } }])
    } else {
      setIngredientsInput(ingredientsInput.filter((_item, i) => (i !== index)))
    }
  }

  return (
    <div className="mx-auto my-2.5 w-9/12">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Submit a Recipe!</h2>
      </div>
      <hr className="mb-2" />
      <Form method="post" action="/recipe/new">
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Title</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="recipeTitle" name="title" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Image URL</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="recipeImage" name="imageurl" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Tags</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="recipeTags" placeholder="E.g. Fun, quick, easy" name="tags" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Servings per Recipe</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="number" id="serving" placeholder="E.g. 4 servings" name="serving" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">
            Recipe Ingredients
          </label>
          <button className="text-xs bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 mb-2 border border-gray-400 rounded shadow" type="button" onClick={addIngredientInput}>Add Ingredient</button>

          {ingredientsInput.map((input, index) => {
            return (
              <div className="flex" key={index}>
                <div className="w-24 mr-2">
                  <input
                    className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]"
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    onChange={event => handleIngredientsInputChange(index, {
                      name: event.target.name,
                      value: event.target.value
                    })}
                    value={input.amount}
                  />
                </div>
                <div className="flex-grow my-1 align-middle">
                  <CreatableSelect
                    isClearable
                    options={ingredients}
                    placeholder="Ingredients"
                    name="ingredients"
                    onChange={option => handleIngredientsInputChange(index, {
                      name: "ingredients",
                      value: option
                    })}
                    value={input.ingredients.value === "" ? null : input.ingredients}
                  />
                </div>
                <div className="mx-2">
                  <button type="button" className="text-xs bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 mb-2 mx-2 border border-gray-400 rounded shadow" onClick={() => removeIngredientInput(index)}>
                    X
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mb-8">
          <label className="block mb-1 font-bold">Recipe Instructions</label>
          <textarea className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" id="recipeInstruction" rows={4} name="instruction"></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#BCDC79] hover:bg-[#A9C66C] text-black text-2xl font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit!
          </button>
        </div>
      </Form>
    </div>
  )
}

export default RecipeForm