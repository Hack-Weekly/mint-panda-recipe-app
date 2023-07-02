import image from "../../assets/images/image-placeholder.png";
import "./recipe.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faHeart,
    faPlateWheat,
} from "@fortawesome/free-solid-svg-icons";

const RecipeComponent = ({ recipe }) => {
    return (
        <div
            className="rounded-3xl drop-shadow-xl p-5 hover:cursor-pointer"
            style={{ backgroundColor: "#ebf5e6" }}
        >
            <img className="recipe__image" src={recipe.imageurl} alt="some image" />
            <div className="font-bold text-xl">{recipe.title}</div>
            <div className="flex gap-1">
                <div>
                    <FontAwesomeIcon icon={faPlateWheat}></FontAwesomeIcon>
                </div>
                <div className="text-xs">{recipe.serving} servings</div>
            </div>
            <div className="mt-10 flex justify-between">
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    <span>0</span>
                </div>
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    <span>35 min</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeComponent;
