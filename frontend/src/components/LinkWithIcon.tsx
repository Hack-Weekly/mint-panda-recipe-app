import { ReactNode } from "react";
import { Link } from "react-router-dom"

interface toIconProp {
  to: string,
  icon: ReactNode
}

const LinkWithIcon = ({ to, icon }: toIconProp) => {
  return (
    <Link to={to} className="flex items-center text-white hover:text-gray-300 pr-3">
      {icon}
    </Link>
  );
};

export default LinkWithIcon