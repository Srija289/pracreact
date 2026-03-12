import {BrowserRouter,Routes,Route} from "react-router-dom";

import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminDashBoard from "./pages/AdminDashBoard";

import MainNavBar from "./components/MainNavBar";
import AdminNavBar from "./components/AdminNavBar";

function App(){

  const isAdmin=localStorage.getItem("admin");

  return(

    <BrowserRouter>

      {isAdmin ? <AdminNavBar/> : <MainNavBar/>}

      <Routes>

        <Route path="/" element={<Register/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/dashboard" element={<AdminDashBoard/>}/>

      </Routes>

    </BrowserRouter>

  )
}

export default App;