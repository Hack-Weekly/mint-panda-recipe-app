import Header from "./Header"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <div className="relative z-20">
        <Header />
        <Link to="/">Home</Link>
        <Link to="/recipe/new">New recipe</Link>
      </div>
    </>
  )
}

export default Navigation