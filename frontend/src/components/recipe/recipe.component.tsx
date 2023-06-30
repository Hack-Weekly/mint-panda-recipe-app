import image from "../../assets/images/image-placeholder.png"
import "./recipe.component.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faHeart, faPlateWheat} from "@fortawesome/free-solid-svg-icons";
// const RecipeComponent = ({name: string, ingredients: {name: string, amount: string}[], instructions: string, description: string}) => {
const RecipeComponent = () => {
    return (
        <div className="rounded-3xl drop-shadow-xl p-5 hover:cursor-pointer" style={{backgroundColor: "#ebf5e6"}}>
            <img className="recipe__image" src={image} alt="some image"/>
            <div className="font-bold text-xl">some name</div>
            <div className="flex gap-1">
                <div><FontAwesomeIcon icon={faPlateWheat}></FontAwesomeIcon></div>
                <div className="text-xs">4 servings</div>
            </div>
            <div className="mt-10 icons">
                <div className="flex gap-2 items-center"><FontAwesomeIcon
                    icon={faHeart}></FontAwesomeIcon><span>70</span></div>
                <div className="flex gap-2 items-center"><FontAwesomeIcon
                    icon={faClock}></FontAwesomeIcon><span>35 min</span></div>
            </div>
        </div>
    )
}

export default RecipeComponent