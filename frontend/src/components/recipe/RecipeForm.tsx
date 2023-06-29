const RecipeForm = () => {
  return (
    <div className="mx-auto my-2.5 w-9/12">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Submit a Recipe!</h2>
      </div>
      <hr className="mb-2" />
      <form>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Title</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="recipeTitle" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Image URL</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="recipeImage" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Tags</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="recipeTags" placeholder="E.g. Fun, quick, easy" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Servings per Recipe</label>
          <input className="w-full h-7 border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="servings" placeholder="E.g. 4 servings" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-bold">Recipe Ingredients</label>
          <div className="flex">
            <div className="w-20 mr-2">
              <input className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="amount1" placeholder="Amount" />
            </div>
            <div className="flex-grow">
              <input className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="ingredients1" placeholder="Ingredients" />
            </div>
          </div>
          <div className="flex">
            <div className="w-20 mr-2">
              <input className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="amount2" />
            </div>
            <div className="flex-grow">
              <input className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="ingredients2" />
            </div>
          </div>
          <div className="flex">
            <div className="w-20 mr-2">
              <input className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="amount3" />
            </div>
            <div className="flex-grow">
              <input className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" type="text" id="ingredients3" />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <label className="block mb-1 font-bold">Recipe Instructions</label>
          <textarea className="h-2/3 w-full border border-gray-300 p-2 bg-[#CCCCCC]" id="recipeInstructions" rows={4}></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#BCDC79] hover:bg-[#A9C66C] text-black text-2xl font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit!
          </button>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm