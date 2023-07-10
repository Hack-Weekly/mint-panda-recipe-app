import "./dashboard/dashboard.component.scss"
import RecipeComponent from "./recipe/recipe.component"
import { Link } from "react-router-dom"
import { Recipe } from "../interfaces"

interface RecipeDataProp {
    recipeResultsData: Recipe[],
    likedIdData: { [key: string]: boolean }
    handleLikeUnlike: (arg?: string) => void
}

const DashboardComponent = ({ recipeResultsData, likedIdData, handleLikeUnlike }: RecipeDataProp) => {
    return (
        <div className="main padding-4">
            <div className="flex justify-center">
                <h2 className="h4 border-b-4 border-b-black text-center w-5/6">
                    Today's Featured
                </h2>
            </div>
            <div className="flex flex-wrap gap-x-6 p-12 justify-around gap-y-6">
                {
                    recipeResultsData.map((recipe, index) => (
                        <div key={recipe.id + index}>
                            <Link to={`recipe/${recipe.id}`}>
                                <RecipeComponent recipe={recipe} liked={likedIdData[recipe.id]} handleLikeUnlike={handleLikeUnlike} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DashboardComponent

