import { useNavigate } from "react-router-dom";
import "../style/style.css";

function AdminNavBar(){

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("admin");
    navigate("/");
    window.location.reload();
  }

  return(

    <div className="navbar">

      <h3>Admin Dashboard</h3>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

    </div>

  )
}

export default AdminNavBar;