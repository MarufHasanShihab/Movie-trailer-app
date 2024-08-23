import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login';
import Player from "./Pages/Player/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        navigate("/")
      }else{
        navigate("/login")
      }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
