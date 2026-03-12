import { Link } from "react-router-dom";
import "../style/style.css";

function MainNavBar(){

  return(

    <div className="navbar">

      <h3>User Portal</h3>

      <div className="nav-links">
        <Link to="/">Register</Link>
        <Link to="/admin">Admin Login</Link>
      </div>

    </div>

  )
}

export default MainNavBar;