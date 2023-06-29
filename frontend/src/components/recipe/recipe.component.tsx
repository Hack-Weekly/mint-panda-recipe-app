import image from "../../assets/images/image-placeholder.png"
import "./recipe.component.scss"

// const RecipeComponent = ({name: string, ingredients: {name: string, amount: string}[], instructions: string, description: string}) => {
const RecipeComponent = () => {
    return (
        <div className="p-2 recipe border">
            <img className="recipe__image" src={image} alt="some image"/>
            <div className="recipe__name">some name</div>
            <div className="d-flex gap-1">
                <div className="icon">icon</div>
                <div className="quantity">4 servings</div>
            </div>
            <div className="margin-top-3 icons">
                <div className="heart-icon">icon</div>
                <div className="time-icon">icon</div>
            </div>
        </div>
    )
}

export default RecipeComponent