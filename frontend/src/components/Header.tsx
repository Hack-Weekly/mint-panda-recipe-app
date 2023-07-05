import { Link } from "react-router-dom"
import { HomeIcon, RecipeIcon } from "./Icons";
import LinkWithIcon from "./LinkWithIcon";

const Header = () => {
  return (
    <>
      <header className="bg-[#41482e] py-6 w-[100%] m-0 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-row pl-3">
            <svg className="w-8 h-8">
            </svg>
            <svg className="w-8 h-8">
            </svg>
          </div>
          <div>
            <Link to={"/"}>
              <h1 className="text-2xl text-white">Mint Panda</h1>
            </Link>
          </div>
          <div className="flex flex-row">
            <LinkWithIcon to="/recipe/new" icon={<RecipeIcon />}/>
            <LinkWithIcon to="/" icon={<HomeIcon />} />
          </div>
        </div>
      </header>
    </>
  );
};


export default Header