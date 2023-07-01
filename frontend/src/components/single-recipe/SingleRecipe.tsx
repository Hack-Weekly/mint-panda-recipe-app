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
      <img className="recipe_image float-right rounded-3xl w-4/12 px-2" src={image} alt="recipe"></img>

      {/* Container for the header + horizontal bar */}
      <div className="text-left w-8/12 pr-5 pb-4">
        <h1 className="text-3xl font-bold mt-4 my-2">SingleRecipe</h1> 
        <div className="border-t-2 border-gray-950"></div>
      </div>

      <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </p>

    </div>
  )
}
