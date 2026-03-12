import React,{useState,useEffect} from "react";
import axios from "axios";
import "../style/style.css";

function AdminDashBoard(){

  const [users,setUsers]=useState([]);
  const [api,setApi]=useState([]);
  const [tab,setTab]=useState("users");
  const [message,setMessage]=useState("");
  const [showMessage,setShowMessage]=useState(false);

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("users"))||[];
    setUsers(data);
  },[]);

  const fetchAPI=async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users");
    setApi(res.data);
  }

  const handleEdit=(userName)=>{
    setMessage(`Edit user: ${userName}`);
    setShowMessage(true);
    setTimeout(()=>setShowMessage(false),3000);
  }

  const handleDelete=(userName)=>{
    setMessage(`Delete user: ${userName}`);
    setShowMessage(true);
    setTimeout(()=>setShowMessage(false),3000);
  }

  return(

    <div className="dashboard">

      <h2 style={{textAlign:"center"}}>Admin Dashboard</h2>

      <div className="tabs">

        <button onClick={()=>setTab("users")}>
          Registered Users
        </button>

        <button onClick={()=>{
          setTab("api");
          fetchAPI();
        }}>
          API Data
        </button>

      </div>

      {tab==="users" && (

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((u,i)=>(
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td>{u.role}</td>
                <td style={{display:"flex",gap:"15px",justifyContent:"center"}}>
                  <button 
                    onClick={()=>handleEdit(u.name)}
                    style={{background:"#3498db",padding:"8px 12px",fontSize:"14px",borderRadius:"5px"}}
                    title="Edit"
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    onClick={()=>handleDelete(u.name)}
                    style={{background:"#e74c3c",padding:"8px 12px",fontSize:"14px",borderRadius:"5px"}}
                    title="Delete"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      )}

      {tab==="api" && (

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>

            {api.map((a)=>(
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.address.city}</td>
              </tr>
            ))}

          </tbody>

        </table>

      )}

      {showMessage && (
        <>
          <div style={{
            position:"fixed",
            top:0,
            left:0,
            right:0,
            bottom:0,
            background:"rgba(0,0,0,0.5)",
            zIndex:999
          }}></div>
          <div style={{
            position:"fixed",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            background:"white",
            padding:"40px",
            borderRadius:"15px",
            boxShadow:"0 15px 50px rgba(0,0,0,0.4)",
            zIndex:1000,
            textAlign:"center",
            minWidth:"350px",
            maxWidth:"500px",
            animation:"popupAppear 0.3s ease"
          }}>
            <p style={{
              marginBottom:"25px",
              fontSize:"18px",
              color:"#2c3e50",
              fontWeight:"500"
            }}>
              {message}
            </p>
            <button 
              onClick={()=>setShowMessage(false)}
              style={{
                background:"#3498db",
                color:"white",
                border:"none",
                padding:"10px 25px",
                borderRadius:"8px",
                cursor:"pointer",
                fontSize:"15px",
                fontWeight:"600",
                transition:"background 0.3s ease"
              }}
              onMouseEnter={(e)=>e.target.style.background="#2980b9"}
              onMouseLeave={(e)=>e.target.style.background="#3498db"}
            >
              OK
            </button>
          </div>
        </>
      )}

    </div>

  )
}

export default AdminDashBoard;