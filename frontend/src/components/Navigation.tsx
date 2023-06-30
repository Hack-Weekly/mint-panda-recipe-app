import Header from "./Header"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/recipe/new">New recipe</Link>
    </>
  )
}

export default Navigation