import image from "../../assets/images/image-placeholder.png"

export default function SingleRecipe() {
  return (
    
    <div className="mx-auto my-2.5 w-9/12">
      <div>
        <button className="justify-start text-l">&lt;&lt; Go Back</button>
      </div>

      <img className="float-right rounded-3xl w-1/4 p-2 h-auto" src={image} alt="recipe"></img>

      <div className="text-left w-9/12 pr-5 pb-4 justify-start">
        <h1 className="text-3xl font-bold mt-4 mb-2">Italian Wedding Soup</h1> 
        <div className="border-t-2 border-black mb-2"></div>

        <h2 className="text-xl text-left font-bold mb-2">Tags</h2>

        <div className="flex justify-start space-x-2">
          <div className="bg-gray-700 rounded px-2">
            <p className="text-white font-semibold">#Fun</p>
          </div>

          <div className="bg-gray-700 rounded px-2">
            <p className="text-white font-semibold">#Quick</p>
          </div>

          <div className="bg-green-700 rounded px-2 pb-1">
            <p className="text-white font-semibold">#Vegan</p>
          </div>

        </div>

        <br></br>

        <h2 className="text-xl text-left font-bold mb-1">Ingredients</h2>

        <div className="pl-5">
          <ul className="list-disc">
            <li className="mb-1">
              1/2 lb Ground beef
            </li>

            <li className="mb-1">
              1/2 lb Ground veal
            </li>

            <li className="mb-1">
              1/4 c Italian seasoned bread crumb
            </li>
            
            <li className="mb-1">
              1 Egg
            </li>
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
          <li className="mb-2">
            Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. 
          </li>
    
          <li className="mb-2">
            Mix well and form into tiny meat balls. 
          </li>

          <li className="mb-2">
            Bake on a cookie sheet for 30 minutes at 350F. 
          </li>

          <li className="mb-2">
            Meanwhile, bring broth to a boil and add spinach. 
          </li>
          
          <li className="mb-2">
            Cover and boil for 5 minutes. 
          </li>

          <li className="mb-2">
            Add the meatballs to the hot broth, bring to a simmer. 
          </li>
          
          <li className="mb-2">
            Stir in the cheese and serve immediately.
          </li>
        </ol>
      </div>


    </div>
  )
}