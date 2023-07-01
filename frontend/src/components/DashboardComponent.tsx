import "./dashboard/dahsboard.component.scss"
import RecipeComponent from "./recipe/recipe.component"

const DashboardComponent = () => {
    return (
        <div className="main padding-5">
            <h2 className="h4 border-b-4 border-b-black">
                today's feature
            </h2>
            <div className="flex flex-wrap gap-x-16 p-12 justify-around gap-y-16">
                <RecipeComponent></RecipeComponent>
                <RecipeComponent></RecipeComponent>
                <RecipeComponent></RecipeComponent>
                <RecipeComponent></RecipeComponent>
                <RecipeComponent></RecipeComponent>
                <RecipeComponent></RecipeComponent>
            </div>
        </div>
    )
}

export default DashboardComponent