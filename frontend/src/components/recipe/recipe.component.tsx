import "./recipe.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faPlateWheat,
} from "@fortawesome/free-solid-svg-icons";
import { Recipe } from "../../interfaces";

interface RecipeProp {
    recipe?: Recipe,
    liked?: boolean,
    handleLikeUnlike?: (arg?: string) => void
}

const RecipeComponent = ({ recipe, liked, handleLikeUnlike }: RecipeProp) => {
    return (
        <div
            className="rounded-3xl drop-shadow-xl p-5 hover:cursor-pointer"
            style={{ backgroundColor: "#ebf5e6" }}
        >
            <div className="flex justify-center mb-3">
                <img className="recipe__image rounded-md" src={recipe?.imageurl} alt={`Image of ${recipe?.title}}`} />
            </div>
            <div className="text-center">
                <div className="font-bold text-xl">{recipe?.title}</div>
            </div>
            <div className="flex gap-1">
                <div>
                    <FontAwesomeIcon icon={faPlateWheat}></FontAwesomeIcon>
                </div>
                <div className="text-xs">{recipe?.serving} servings</div>
            </div>
            <div className="mt-10 flex justify-between">
                <button className="flex gap-1 items-center" onClick={(event) => {
                    event.preventDefault() // Prevent the link from sending user to single recipe page
                    if(!handleLikeUnlike) return;
                    handleLikeUnlike(recipe?.id)
                }}>
                    {
                        liked ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                    }
                    <span>{recipe?.like}</span>
                </button>
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    <span>35 min</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeComponent;
