import "./dahsboard.component.scss"
import RecipeComponent from "../recipe/recipe.component.tsx";

const DashboardComponent = () => {
    return (
        <div className="grid-container">
            <div className="header fs-5 text-white padding-y-2">
                Mint panda
            </div>
            <div className="sidebar"></div>
            <div className="main padding-5 ">
                <h2 className="h4 border-bottom border-weight-medium">
                    today's feature
                </h2>
                <div className="recipes-container">
                    <div className="recipes-row">
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                    </div>
                    <div className="recipes-row">
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                    </div>
                    <div className="recipes-row">
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                    </div>
                    <div className="recipes-row">
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                    </div>
                    <div className="recipes-row">
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                        <RecipeComponent></RecipeComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent