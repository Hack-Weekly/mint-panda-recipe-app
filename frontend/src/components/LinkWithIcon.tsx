import { Link } from "react-router-dom"

const LinkWithIcon = ({ to, icon }) => {
  return (
    <Link to={to} className="flex items-center text-white hover:text-gray-300 pr-3">
      {icon}
    </Link>
  );
};

export default LinkWithIcon