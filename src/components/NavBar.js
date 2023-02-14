import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="containter">
        <Link to="/">
          <h1>Take Notes App with MERN Stack</h1>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
