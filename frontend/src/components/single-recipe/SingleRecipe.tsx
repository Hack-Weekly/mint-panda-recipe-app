import React from 'react'
import image from "../../assets/images/image-placeholder.png"

export default function SingleRecipe() {
  return (
    // This creates a 'div' element or section which is a container for other
    // HTML elements -> Here I have the main title in the container  
    // mx-auto means to automatically align the margins to the center, my means margin
    // in the y-axis and w-9/12 means the width is 9/12 of the page size

    // The best way to approach image and text is to have two div elements one for image and the 
    // other for the text, align them separately

    // Container for the entire form
    <div className="mx-auto my-2.5 w-9/12">
      <img className="recipe_image float-right scale rounded-3xl w-4/12 px-2" src={image} alt="recipe"></img>

      {/* Container for the header + horizontal bar */}
      <div className="text-left w-8/12 pr-5 pb-4">
        <h1 className="text-3xl font-bold mt-4 mb-2">SingleRecipe</h1> 
        <div className="border-t-2 border-gray-950 mb-2"></div>

        <h2 className="text-xl text-left font-bold">Tags</h2>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        </p>

        <br></br>
        <br></br>
        <br></br>

        
      </div>

      <div className="text-left w-8/12 pr-5 pb-4">
        <h2 className="text-2xl text-left font-bold mb-2">Steps</h2>
        <div className="border-t-2 border-gray-950"></div>
      </div>

      <div className="pl-5">
        <ol className="list-decimal">
          <li className="mb-2">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          </li>

          <li className="mb-2">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          </li>
          
          <li className="mb-2">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          </li>

        </ol>
      </div>


    </div>
  )
}
