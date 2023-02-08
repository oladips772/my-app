/** @format */
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>logo</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  );
}
export default Header;
