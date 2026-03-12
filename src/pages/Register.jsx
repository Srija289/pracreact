import React,{useState} from "react";
import "../style/style.css";

function Register(){

  const userRole="faculty";

  const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    gender:""
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    let users=JSON.parse(localStorage.getItem("users"))||[];

    users.push({...form,role:userRole});

    localStorage.setItem("users",JSON.stringify(users));

    alert("User Registered");
  }

  return(

    <div className="page">

      <div className="card">

        <h2>Register ({userRole})</h2>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Name" onChange={handleChange}/>
          <input name="email" placeholder="Email" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange}/>

          <select name="gender" onChange={handleChange}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <button>Register</button>

        </form>

      </div>

    </div>

  )
}

export default Register;