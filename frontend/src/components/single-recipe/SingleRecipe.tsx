export default function SingleRecipe({ recipeData }) {
  return (

    <div className="mx-auto my-2.5 w-9/12">
      <div>
        <button className="justify-start text-l">&lt;&lt; Go Back</button>
      </div>

      <img className="float-right rounded-3xl w-1/4 p-2 h-auto" src={recipeData.imageurl} alt={`Image of ${recipeData.title}`}></img>

      <div className="text-left w-9/12 pr-5 pb-4 justify-start">
        <h1 className="text-3xl font-bold mt-4 mb-2">{recipeData.title}</h1>
        <div className="border-t-2 border-black mb-2"></div>

        <h2 className="text-xl text-left font-bold mb-2">Tags</h2>

        <div className="flex justify-start space-x-2">
          {recipeData.recipe_tag_link.map(tag => (
            <div className="bg-gray-700 rounded px-2" key={tag.id}>
              <p className="text-white font-semibold">#{tag.name}</p>
            </div>
          ))}

          {/* Add vegan color tag? */}
          {/* <div className="bg-green-700 rounded px-2 pb-1">
            <p className="text-white font-semibold">#Vegan</p>
          </div> */}

        </div>

        <br></br>

        <h2 className="text-xl text-left font-bold mb-1">Ingredients</h2>

        <div className="pl-5">
          <ul className="list-disc">
            {recipeData.recipe_ingredient_link.map(ingredient => (
              <li className="mb-1" key={ingredient.id}>
                {ingredient.amount} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>

        <br></br>
        <br></br>
        <br></br>

      </div>

      <div className="text-left pr-5 pb-4">
        <h2 className="text-2xl text-left font-bold mb-2">Steps</h2>
        <div className="border-t-2 border-black"></div>
      </div>

      <div className="pl-5">
        <ol className="list-decimal">
          {/* What the code does:
          1. Split string into an array separated by newline
          2. Strip off any user created lists */}
          {recipeData.instruction.split(/\r?\n/).map((line: string, index: number) => (
            <li className="mb-2" key={index}>
              {line.replace(/^\s*\d+\.\s*/g, "")}
            </li>
          ))}

        </ol>
      </div>


    </div>
  )
}