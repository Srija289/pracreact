import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "../style/style.css";

function AdminLogin(){

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  const login=(e)=>{
    e.preventDefault();

    if(username==="admin" && password==="admin123"){
      localStorage.setItem("admin","true");
      navigate("/dashboard");
      window.location.reload();
    }
    else{
      alert("Invalid credentials");
    }
  }

  return(

    <div className="page">

      <div className="card">

        <h2>Admin Login</h2>

        <form onSubmit={login}>

          <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

          <button>Login</button>

        </form>

      </div>

    </div>

  )
}

export default AdminLogin;