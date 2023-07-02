import "./dashboard/dashboard.component.scss"
import RecipeComponent from "./recipe/recipe.component"
import { Link } from "react-router-dom"
import { RecipeList } from "../interfaces"

interface RecipeDataProp {
    recipesData: RecipeList
}

const DashboardComponent = ({ recipesData }: RecipeDataProp) => {
    return (
        <div className="main padding-5">
            <h2 className="h4 border-b-4 border-b-black">
                today's feature
            </h2>
            <div className="flex flex-wrap gap-x-16 p-12 justify-around gap-y-16">
                {
                    recipesData.results.map(recipe => (
                        <div key={recipe.id}>
                            <Link to={`recipe/${recipe.id}`}>
                                <RecipeComponent recipe={recipe} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DashboardComponent

