import { Form, Link } from "react-router-dom"
import { ErrorMessage, Ingredient, Tag } from "../../interfaces"
import { useEffect, useState } from "react"
import CreatableSelect from "react-select/creatable"
import "./recipeform.css"

interface IngredientList {
  ingredientsData: Ingredient[]
}

interface TagList {
  tagsData: Tag[]
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

const RecipeForm = ({ ingredientsData, tagsData, errorMessage, submitting }: IngredientList & TagList & { errorMessage: ErrorMessage } & { submitting: boolean }) => {
  const [ingredients, setIngredients] = useState<readonly IngredientOption[]>([])
  const [tags, setTags] = useState<readonly IngredientOption[]>([])
  const [ingredientsInput, setIngredientsInput] = useState<IngredientInput[]>([{ amount: "", ingredients: { value: "", label: "" } }])

  useEffect(() => {
    setIngredients(ingredientsData.map(ingredientData => ({ value: ingredientData["id"], label: ingredientData["name"] })))
    setTags(tagsData.map(tagData => ({ value: tagData["id"], label: tagData["name"] })))
    // This only needs to load once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <div className="mx-auto mt-8 mb-20 w-9/12">
      <div className="w-1/2 sm:w-1/3 md:w-1/6 2xl:w-1/12 mb-2">
        <Link to={"/"} className="w-1/2 sm:w-1/3 md:w-1/6 2xl:w-1/12">
          <button className="flex flex-row text-l">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </div>
            <div>
              Go Back
            </div>
          </button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Submit a Recipe!</h1>
      </div>
      <hr className="mb-2" />
      <Form method="post" action="/recipe/new">
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Title</label>
          {errorMessage?.title && <p className="text-sm text-red-500">{errorMessage?.title}</p>}
          <input className="w-full px-2 input-field" type="text" id="recipeTitle" name="title" placeholder="E.g. My recipe!" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Image URL</label>
          {errorMessage?.imageUrl && <p className="text-sm text-red-500">{errorMessage?.imageUrl}</p>}
          <input className="w-full px-2 input-field" type="text" id="recipeImage" name="imageurl" placeholder="E.g. https://example.com/recipe.jpg" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Tags</label>
          {errorMessage?.tags && <p className="text-sm text-red-500">{errorMessage?.tags}</p>}
          <CreatableSelect
            isMulti
            isClearable
            options={tags}
            placeholder="E.g. Quick, easy, vegan"
            name="tags"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Servings per Recipe</label>
          {errorMessage?.serving && <p className="text-sm text-red-500">{errorMessage?.serving}</p>}
          <input className="w-full px-2 input-field" type="number" id="serving" placeholder="E.g. 4" name="serving" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">
            Recipe Ingredients
          </label>
          <button className="text-xs bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 mb-2 border border-gray-400 rounded shadow" type="button" onClick={addIngredientInput}>Add Ingredient</button>
          {errorMessage?.ingredients && <p className="text-sm text-red-500">{errorMessage?.ingredients}</p>}
          {ingredientsInput?.map((input, index) => {
            return (
              <div className="flex" key={index}>
                <div className="w-24 mr-2">
                  <div>
                    <input
                      className="w-full px-2 mt-1 input-field"
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
                </div>
                <div className="flex-grow my-1 align-middle">
                  <CreatableSelect
                    isClearable
                    options={ingredients}
                    placeholder="Ingredient"
                    name="ingredients"
                    onChange={option => handleIngredientsInputChange(index, {
                      name: "ingredients",
                      value: option
                    })}
                    value={input.ingredients.value === "" ? null : input.ingredients}
                  />
                </div>
                <div className="mx-2">
                  <button type="button" className="w-full p-2 mt-1 input-field" onClick={() => removeIngredientInput(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mb-8">
          <label className="block mb-1 font-bold">Recipe Instructions</label>
          {errorMessage?.instruction && <p className="text-sm text-red-500">{errorMessage?.instruction}</p>}
          <textarea className="h-2/3 p-2 w-full input-box" id="recipeInstruction" rows={4} name="instruction" placeholder="E.g. First, place the egg..."></textarea>
        </div>
        <div className="flex justify-center">
          <button disabled={submitting} className="disabled:opacity-75 disabled:text-slate-500 disabled:border-slate-200 bg-[#BCDC79] enabled:hover:bg-[#A9C66C] text-black text-2xl font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline" type="submit">
            {submitting ? "Processing..." : "Submit!"}
          </button>
        </div>
        {errorMessage?.id && <p className="text-sm text-red-500 mt-2">Creating your own Tag or Ingredient is not supported yet</p>}
      </Form>
    </div>
  )
}

export default RecipeForm