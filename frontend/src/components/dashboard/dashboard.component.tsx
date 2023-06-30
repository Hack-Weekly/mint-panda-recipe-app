import "./dahsboard.component.scss"
import RecipeComponent from "../recipe/recipe.component.tsx";
import SidebarComponent from "../sidebar/sidebar.component.tsx";

const DashboardComponent = () => {
    return (
        <div className="grid-container">
            <h1 className="header text-white py-10 text-5xl font-bold ">
                Mint panda
            </h1>
            <div className="sidebar">
                <SidebarComponent></SidebarComponent>
            </div>
            <div className="main padding-5 ">
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
        </div>
    )
}

export default DashboardComponent