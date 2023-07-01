import { HomeIcon, RecipeIcon } from "./Icons";
import LinkWithIcon from "./LinkWithIcon";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="bg-[#41482e] py-6 w-[100%] m-0 shadow-lg">
        <div className="container mx-auto flex items-center justify-center">
          <div>
            <Link to={"/"}>
              <h1 className="text-2xl text-white">Mint Panda</h1>
            </Link>
          </div>
        </div>
        <LinkWithIcon to="/" icon={<HomeIcon />} />
        <LinkWithIcon to="/recipe/new" icon={<RecipeIcon />} />
      </header>
    </>
  );
};


export default Header