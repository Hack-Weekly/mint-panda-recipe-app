import { FullRecipe } from "../../interfaces"
import { Link } from "react-router-dom"

interface recipeDataProp {
  recipeData: FullRecipe
}

export default function SingleRecipe({ recipeData }: recipeDataProp) {
  return (
    <div className="mx-auto mt-8 mb-20 w-9/12">
      <div className="w-1/2 sm:w-1/3 md:w-1/6 2xl:w-1/12">
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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-full md:order-last lg:w-1/2 xl:w-1/2 2xl:w-1/3">
          <img className="rounded-3xl p-2 h-auto max-h-[36rem]" src={recipeData.imageurl} alt={`Image of ${recipeData.title}`}></img>
        </div>
        <div className="text-left lg:w-2/3 md:w-full pr-5 pb-4">
          <h1 className="text-3xl font-bold mt-4 mb-2">{recipeData.title}</h1>
          <div className="border-t-2 border-black mb-2"></div>

          <h2 className="text-xl text-left font-bold mb-2">Tags</h2>

          <div className="flex justify-start space-x-2 flex-wrap">
            {recipeData?.recipe_tag_link.map((tag, index) => (
              <div className="bg-gray-700 rounded px-2 mt-1" key={`${tag.id}-${index}`}>
                <p className="text-white font-semibold">#{tag.name}</p>
              </div>
            ))}

          </div>

          <br></br>

          <h2 className="text-xl text-left font-bold mb-1">Ingredients</h2>

          <div className="pl-5">
            <ul className="list-disc">
              {recipeData?.recipe_ingredient_link.map((ingredient, index) => (
                <li className="mb-1" key={`${ingredient.id}-${index}`}>
                  {ingredient.amount} {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          <br></br>
          <br></br>
          <br></br>

        </div>
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
          {recipeData?.instruction.split(/\r?\n/).map((line: string, index: number) => (
            <li className="mb-2" key={index}>
              {line.replace(/^\s*\d+\.\s*/g, "")}
            </li>
          ))}

        </ol>
      </div>


    </div >
  )
}